import React, { useState } from "react";
import Swal from "sweetalert2";
import districts from "../../data/warehouses.json";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";

const SendParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [parcel, setParcel] = useState({
    type: "document",
    title: "",
    weight: "",
    senderName: user?.displayName || "",
    senderContact: "",
    senderRegion: "",
    senderCenter: "",
    senderAddress: "",
    pickupInstruction: "",
    receiverName: "",
    receiverContact: "",
    receiverRegion: "",
    receiverCenter: "",
    receiverAddress: "",
    deliveryInstruction: "",
  });

  // Dynamically extract region list
  const regions = [...new Set(districts.map((d) => d.region))];

  // Return service centers (districts) for a given region
  const getCenters = (region) =>
    districts.filter((d) => d.region === region).map((d) => d.district);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParcel({ ...parcel, [name]: value });
  };

  const generateTrackingId = () => {
    const prefix = "TRK";
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
    const random = Math.random().toString(36).substring(2, 8).toUpperCase(); // 6-char random code
    return `${prefix}-${date}-${random}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "type",
      "title",
      "senderName",
      "senderContact",
      "senderRegion",
      "senderCenter",
      "senderAddress",
      "pickupInstruction",
      "receiverName",
      "receiverContact",
      "receiverRegion",
      "receiverCenter",
      "receiverAddress",
      "deliveryInstruction",
    ];

    const missing = requiredFields.find((key) => !parcel[key]);
    if (missing) {
      Swal.fire({
        icon: "error",
        title: "Missing Field",
        text: `${missing} is required`,
      });
      return;
    }

    // 🛒 Cost Calculation Logic
    const isSameDistrict = parcel.senderCenter === parcel.receiverCenter;
    const type = parcel.type;
    const weight = Number(parcel.weight) || 0;
    let base = 0;
    let weightCost = 0;
    let costBreakdown = "";

    if (type === "document") {
      base = isSameDistrict ? 60 : 80;
      costBreakdown = `Type: Document<br>Rate: ${
        isSameDistrict ? "৳60 (Within City)" : "৳80 (Outside City)"
      }`;
    } else {
      if (weight <= 3) {
        base = isSameDistrict ? 110 : 150;
        costBreakdown = `Type: Non-Document (≤3kg)<br>Rate: ${
          isSameDistrict ? "৳110 (Within City)" : "৳150 (Outside City)"
        }`;
      } else {
        const extraKg = weight - 3;
        base = isSameDistrict ? 110 : 150;
        weightCost = extraKg * 40;
        base += weightCost;
        costBreakdown = `Type: Non-Document (>3kg)<br>Base: ${
          isSameDistrict ? "৳110 (Within City)" : "৳150 (Outside City)"
        }<br>Extra Weight Cost: ${extraKg}kg × ৳40 = ৳${weightCost}`;
      }
    }

    const totalCost = base;

    // 🔔 SweetAlert2 with breakdown
    Swal.fire({
      title: "Confirm Parcel",
      html: `
      <div class="text-left">
        <p><strong>🚚 Total Delivery Cost: ৳${totalCost}</strong></p>
        <hr class="my-2" />
        <p class="text-sm">${costBreakdown}</p>
        <p class="text-sm">Sender Center: ${parcel.senderCenter}</p>
        <p class="text-sm">Receiver Center: ${parcel.receiverCenter}</p>
      </div>
    `,
      icon: "info",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "💳 Proceed to Payment",
      denyButtonText: "✏️ Continue Editing",
      cancelButtonText: "❌ Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          ...parcel,
          cost: totalCost,
          tracking_id: generateTrackingId(), // 👈 generate unique tracking ID
          create_by: user.email,
          status: "pending",
          delivery_status: "not collected",
          creation_date: new Date().toISOString(),
        };

        console.log("Saving to DB:", data);

        // custom hook

        axiosSecure
          .post("/parcels", data)
          .then((res) => console.log(res.data))
          .catch((err) =>
            console.error("CORS Error:", err.response || err.message)
          );

        Swal.fire("✅ Parcel Confirmed", "Proceeding to payment", "success");

        // navigate("/payment"); // If needed
      } else if (result.isDenied) {
        Swal.fire("✏️ You can continue editing", "", "info");
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Add New Parcel</h1>
        <p className="text-gray-500">
          Enter pickup and delivery details for door-to-door service.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 📦 Parcel Info */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Parcel Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              name="type"
              value={parcel.type}
              onChange={handleChange}
              className="select select-bordered"
            >
              <option value="document">Document</option>
              <option value="non-document">Non-Document</option>
            </select>
            <input
              name="title"
              type="text"
              placeholder="Parcel Title"
              className="input input-bordered"
              onChange={handleChange}
            />
            {parcel.type === "non-document" && (
              <input
                name="weight"
                type="number"
                placeholder="Weight (kg)"
                className="input input-bordered"
                onChange={handleChange}
              />
            )}
          </div>
        </section>

        {/* 👤 Sender + Receiver Info */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 🧑 Sender Info */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Sender Info</h2>
              <div className="space-y-4">
                <input
                  name="senderName"
                  value={parcel.senderName}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  readOnly
                />
                <input
                  name="senderContact"
                  type="text"
                  placeholder="Contact"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                />
                <select
                  name="senderRegion"
                  className="select select-bordered w-full"
                  onChange={handleChange}
                >
                  <option value="">Select Region</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <select
                  name="senderCenter"
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  disabled={!parcel.senderRegion}
                >
                  <option value="">Select Service Center</option>
                  {getCenters(parcel.senderRegion).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <input
                  name="senderAddress"
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                />
                <textarea
                  name="pickupInstruction"
                  placeholder="Pickup Instruction"
                  className="textarea textarea-bordered w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 🎯 Receiver Info */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Receiver Info</h2>
              <div className="space-y-4">
                <input
                  name="receiverName"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                />
                <input
                  name="receiverContact"
                  type="text"
                  placeholder="Contact"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                />
                <select
                  name="receiverRegion"
                  className="select select-bordered w-full"
                  onChange={handleChange}
                >
                  <option value="">Select Region</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <select
                  name="receiverCenter"
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  disabled={!parcel.receiverRegion}
                >
                  <option value="">Select Service Center</option>
                  {getCenters(parcel.receiverRegion).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <input
                  name="receiverAddress"
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                />
                <textarea
                  name="deliveryInstruction"
                  placeholder="Delivery Instruction"
                  className="textarea textarea-bordered w-full"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 🔘 Submit Button */}
        <div className="text-right">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
