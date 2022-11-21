import { useState } from "react";

export default function Orbital() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-border" onClick={() => setOpen(!open)}>
      <h3>Orbital Data</h3>
      {open && (
        <div>
          <p>
            Orbit Perigee: <span style={{ float: "right" }}>362600 km</span>
          </p>
          <p>
            Orbit Apogee: <span style={{ float: "right" }}>405400 km</span>
          </p>
          <p>
            Orbit SemimajorAxis:{" "}
            <span style={{ float: "right" }}>384399 km</span>
          </p>

          <p>
            Orbit Inclination: <span style={{ float: "right" }}>5.1450°</span>
          </p>
        </div>
      )}
    </div>
  );
}
