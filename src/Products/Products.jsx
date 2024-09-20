import React from "react";
import "./Products.css";

function Products({results}) {
  return (
    <>
     <section className='card-container'>
      {results}
      </section>
    </>
  );
}

export default Products;
