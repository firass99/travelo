import React from "react";
import { useParams } from "react-router-dom";

function BlogsById() {
  const id = useParams();
  return <div>BlogsById</div>;
}

export default BlogsById;
