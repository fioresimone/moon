import { useState } from "react";

export default function Phase({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-border" onClick={() => setOpen(!open)}>
      <h3>Phase Data</h3>
      {open && (
        <div>
          <p>
            Phase:{" "}
            <span style={{ float: "right" }}>{data.phase.toFixed(8)}</span>
          </p>
          <p>
            Phase Age:{" "}
            <span style={{ float: "right" }}>{data.phaseAge.toFixed(8)}</span>
          </p>
          <p>
            Phase Angle:{" "}
            <span style={{ float: "right" }}>{data.phaseAngle.toFixed(8)}</span>
          </p>
          <p>
            Phase Name: <span style={{ float: "right" }}>{data.phaseName}</span>
          </p>
        </div>
      )}
    </div>
  );
}
