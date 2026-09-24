// destinations-page.jsx (or wherever this lives)
import React from "react";
import { DestinationsCard } from "../destinations-card";
import { DESTINATIONS } from "../../data/data";

function Destinations() {
  return (
    <div id="destinations-section">
      <div className="container ">
        <p className="text-3xl font-extrabold py-4 text-center dark:hover:text-white/70 duration-100 m-4">
          Our Destinations:{" "}
        </p>

        <div className="flex items-center flex-wrap gap-6">
          {DESTINATIONS.map((dest) => (
            <DestinationsCard Dest={dest} key={dest.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
