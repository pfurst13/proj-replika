import { useEffect, useState } from "react";
import { Link, useActionData } from "react-router-dom";
import productCrud from "../../servie/productCrud";
import FilterProductAdmin from "./FilterProdcuctAdmin";

/**
 *
 * -A termékek listázáért felelős komponens admin oldalon
 * -return-je az adatbázisban szereplő termékek táblázatba foglalva
 */

const ProductListAdmin = () => {
  /**
   * -useState hook használatával beállítjuk az összes termék értékét a products állapotváltozóba
   * -kezdeti értéke üres tömb
   */
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [displayed, setDisplayed] = useState([])

  /**
   * -useEffect hook használatával betöltjük az adatbázisból a termékadatokat
   * -frissítjük az állapotváltozó értékét
   * -useEffect nélkül végtelen ciklusba kerülne a renderelés
   * -products tömb értéke a termékek objektumai, ezen végigiterálva megjelenítjük a a termékek adatait a táblázatban
   */

  useEffect(() => {
    productCrud.read().then((products) => {
      setProducts(products);
      setDisplayed(products);
      console.log(products);
    });
  }, []);

  return (
    <>
      <div className="table-container">
        <table>
          <tr>
            <th>ID</th>
            <th>Terméknév</th>
            <th>Termék ára</th>
          </tr>

          {displayed.map((product) => (
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
      <div>
        <label>
          Szürés termékre:
          <input
            type="text"
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
          />
        </label>
          <button onClick={filter}>Szürés</button>
      </div>
    </>
  );

  function filter() {
    const listFilteredObj = [];

    products.forEach((product) => {
      if (product.title.toLowerCase().includes(filtered.toLowerCase())) {
        listFilteredObj.push(product);
      }
    });
    console.log(listFilteredObj);
    setDisplayed(listFilteredObj);
  }
};

export default ProductListAdmin;
