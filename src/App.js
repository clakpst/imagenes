import React, { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [urlImagen, setUrlImagen] = new useState();
  return (
    <React.Fragment>
      <button
        onClick={() => setUrlImagen("http://via.placeholder.com/111x111")}
      >
        img1
      </button>
      <button
        onClick={() => setUrlImagen("http://via.placeholder.com/222x222")}
      >
        img2
      </button>
      <button
        onClick={() => setUrlImagen("http://via.placeholder.com/333x333")}
      >
        img3
      </button>
      <div>
        <img src={urlImagen} />
      </div>
    </React.Fragment>
  );
}
