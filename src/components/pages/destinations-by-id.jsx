import React from "react";
import { useParams } from "react-router-dom";
import { DESTINATIONS } from "../../data/data";

function DestinationById() {
  const { id } = useParams();
  const destination = DESTINATIONS.find((dest) => dest.id === id);

  return <div>Destination By Id = ${id}</div>;
}

export default DestinationById;
