
let totalPrice = 0;
let discount = 0.20;

function getElementInnerText(target){
  const purchaseProductListContainer = document.getElementById('purchase-product-list');
  const productName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement('li');
  li.innerText = productName;
  purchaseProductListContainer.appendChild(li);

  


  const productPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];

  totalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
  document.getElementById('total-price').innerText = totalPrice.toFixed(2);


  // totalDiscount = totalPrice * discount;
  // document.getElementById('total-discount').innerText = totalDiscount.toFixed(2);


  // newTotal = totalPrice - totalDiscount;
  // document.getElementById('new-total').innerText = newTotal.toFixed(2);


  if (totalPrice>0){
    document.getElementById('purchase-btn').disabled = false;
  }

  
}