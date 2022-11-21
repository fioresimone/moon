import { useState } from "react";

export default function Physical() {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-border" onClick={() => setOpen(!open)}>
      <h3>Physical Data</h3>
      {open && (
        <div>
          <p>
            Radius: <span style={{ float: "right" }}>1737.4 km</span>
          </p>
          <p>
            Mass: <span style={{ float: "right" }}>7.342e+22 kg</span>
          </p>
          <p>
            SurfaceGravity: <span style={{ float: "right" }}>0.1654 g</span>
          </p>
          <p>
            EscapeVelocity: <span style={{ float: "right" }}>2.38 km/s</span>
          </p>
        </div>
      )}
    </div>
  );
}
