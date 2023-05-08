import { useEffect, useState } from "react";
import productCrud from "../../servie/productCrud";

const FilterByPriceAdmin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productCrud.read().then((products) => {
      setProducts(products);
    });
  }, []);

  function priceFilter(priceFrom, priceTo) {
    priceFrom = Number(priceFrom);
    priceTo = Number(priceTo);
    const listFilteredObj = [];

    products.forEach(product => {
        if(product.price >= priceFrom && product.price <= priceTo){

            listFilteredObj.push(product)
        }
        
    })

    return listFilteredObj;
  }

  const filteredObj = priceFilter(2000, 4500)

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

export default FilterByPriceAdmin;
