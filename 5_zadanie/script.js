function calculateTotal() {
    const productSelect = document.getElementById("productSelect");
    const selectedProduct =
      productSelect.options[productSelect.selectedIndex].value;

    const quantity = parseFloat(document.getElementById("quantity").value);

    let price = 0;
    switch (selectedProduct) {
      case "product1":
        price = 1000;
        break;
      case "product2":
        price = 2000;
        break;
      case "product3":
        price = 3000;
        break;
      case "product4":
        price = 4599;
       break;
      default:
        price = 0;
    }
    const totalCost = 0;
    if (quantity>0){
        const totalCost = price * quantity;        
        document.getElementById("totalCost").textContent = totalCost;
    }
    else{
    document.getElementById("totalCost").textContent = totalCost;}
  }
