import prodUrl from "./prodUrl";

/**
 * -ebben a fájlban gyűjtjük a termékekhez tartozó CRUD függvényeket
 *
 */

function createProd(product) {
  return fetch(`${prodUrl}/termekek.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((resp) => resp.json());
}

function updateProd(product) {
    return fetch(`${prodUrl}/termekek/${product.id}.json`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(resp => resp.json())
}

function getProd() {
  return fetch(`${prodUrl}/termekek.json`
  )
  .then(resp => resp.json())
  .then(json => Object.values(json))
}


export default {
    create: createProd,
    update: updateProd,
    read: getProd
}