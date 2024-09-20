import { useState, useId } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommeneded/Recommeneded";
import Sidebar from "./Sidebar/Sidebar";
import ProductsData from "./db/data";
import Card from "./Products/Card";

function App() {
  const id = useId();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ..................input Filter..................

  const [query, setQuery] = useState("");
 
  const handleInput = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value)
  };

  const filterItem = ProductsData.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  //..................radio Filter.................
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value)
  };

  //..................buttons Filter.................

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filterData(products, selected, query) {
    let filterProducts = products;
    // fiftering items
    if (query) {
      filterProducts = filterItem;
    }

    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, title, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected
      );
    }

    return filterProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
 const results = filterData(ProductsData, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInput={handleInput} />
      <Recommended handleClick={handleClick} />
      <Products  results={results} />

 
    </>
  );
}

export default App;
