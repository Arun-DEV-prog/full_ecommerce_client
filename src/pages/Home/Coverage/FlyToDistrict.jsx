// components/FlyToDistrict.jsx
import { useMap } from "react-leaflet";
import { useEffect } from "react";

const FlyToDistrict = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.setView(coords, 10, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [coords, map]);

  return null;
};

export default FlyToDistrict;
