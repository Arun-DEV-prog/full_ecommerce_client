import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districts from "../../../data/warehouses.json";
import FlyToDistrict from "./FlyToDistrict";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const CoverageMap = () => {
  const [search, setSearch] = useState("");
  const [selectedCoords, setSelectedCoords] = useState(null);
  const markerRefs = useRef([]);

  const handleSearch = () => {
    const query = search.trim().toLowerCase();

    const index = districts.findIndex((d) =>
      d.district.toLowerCase().includes(query)
    );

    if (index !== -1) {
      const d = districts[index];
      setSelectedCoords([d.latitude, d.longitude]);

      const marker = markerRefs.current[index];
      if (marker) marker.openPopup();
    } else {
      alert("District not found");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="w-full h-[600px] rounded-xl shadow overflow-hidden">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* 👇 Automatically fly to selected coords */}
          <FlyToDistrict coords={selectedCoords} />

          {/* 👇 Render all district markers */}
          {districts.map((d, index) => (
            <Marker
              key={index}
              position={[d.latitude, d.longitude]}
              ref={(ref) => (markerRefs.current[index] = ref)}
            >
              <Popup>
                <div className="text-sm space-y-1">
                  <h3 className="font-bold">{d.district}</h3>
                  <p>
                    <strong>Areas:</strong> {d.covered_area.join(", ")}
                  </p>
                  <a
                    href={d.flowchart}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Flowchart
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageMap;
