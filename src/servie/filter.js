class Filter {
  constructor(prodName, priceFrom, priceTo) {
    this.prodName = prodName;
    this.priceFrom = priceFrom;
    this.priceTo = priceTo;
  }

  getFilterByName() {
    const listFilteredObj = [];

    products.forEach((product) => {
      if (product.title.toLowerCase().includes(this.prodName.toLowerCase())) {
        listFilteredObj.push(product);
      }
    });
    return listFilteredObj;
  }
}
