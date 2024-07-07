let totalPrice = 0;

function getElementInnerText(target){
  const purchaseProductListContainer = document.getElementById('purchase-product-list');
  const productName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement('li');
  li.innerText = productName;
  purchaseProductListContainer.appendChild(li);

  const productPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];

  totalPrice = parseFloat(totalPrice) + parseFloat(productPrice)
  const totalPriceAmount = document.getElementById('total-price')
  totalPriceAmount.innerText = totalPrice.toFixed(2)
  
  if (totalPrice > 0){
    document.getElementById('purchase-btn').disabled = false;
  }

  // for (let i = 0; i < purchaseProductListContainer.innerText.length;i++){
  //   const productList = purchaseProductListContainer.innerText[i]
  //   if(productList.length > 5){
  //     alert ('You are not add more products on your purchase list.Please purchase the products')
  //   }
  // }
  
  if (totalPrice >= 200){
    document.getElementById('user-coupon').disabled = false;
  }

  const discount = totalPrice * 20 / 100 
  const newTotal = parseFloat(totalPrice) - parseFloat(discount)
  let newTotalPrice = document.getElementById('new-total')

  const discountTotalPrice = parseFloat(totalPrice) - parseFloat(newTotal)
  let discountPrice = document.getElementById('total-discount')

  document.getElementById('coupon-btn').addEventListener('click',function(){
    const inputField = document.getElementById("user-coupon").value
    if(inputField === 'SELL200'){
      newTotalPrice.innerText = newTotal.toFixed(2)
      discountPrice.innerText = discountTotalPrice.toFixed(2)
    }else{
      alert('Invalid your code.Please give me the valid code or pay to the payable total amount')
    }
    
  })

  document.getElementById('go-home-btn').addEventListener('click',function(){
    document.getElementById("user-coupon").value = ''
    purchaseProductListContainer.innerText = '';
    totalPriceAmount.innerText = '00'
    discountPrice.innerText = '00';
    newTotalPrice.innerText = '00';
  })
}