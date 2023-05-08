import { useEffect, useState } from "react";
import productCrud from "../../servie/productCrud";

const FilterProductAdmin = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productCrud.read().then((products) => {
      setProducts(products);
    });
  }, []);

  function filterProds(prodName) {
    const listFilteredObj = [];

    products.forEach(product => {
      if(product.title.toLowerCase().includes(prodName.toLowerCase())){
        listFilteredObj.push(product)
      }
    })
    return listFilteredObj;
  }

  const filteredObj = filterProds('Latte');
  console.log(filteredObj);

  return (
    <>
      <div className="table-container">
        <table>
          <tr>
            <th>ID</th>
            <th>Terméknév</th>
            <th>Termék ára</th>
          </tr>

          {filteredObj.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price} Ft</td>
              <td>
                <button className="btn">Szerkesztés</button>
              </td>
              <td>
                <button className="btn">Törlés</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default FilterProductAdmin;
