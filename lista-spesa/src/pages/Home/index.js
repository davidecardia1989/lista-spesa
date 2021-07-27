import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/carrello">Go to the shopping chart</Link>
    </div>
  );
}
