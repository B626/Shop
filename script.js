const shop = (function () {
   let balance = 2000
   let beerCount = 150
   let wineCount = 120
   let pepsiCount = 100
   const beerPrice = 30
   const winePrice = 40
   const pepsiPrice = 70
   return {
      buyBeer(beer) {
         if (beer > beerCount) {
            return alert(`Too much beer, you cannot order more beer then ${beerCount}`)
         }
         beerCount -= beer
         balance += beerPrice * beer
      },
      getBalance() {
         return balance
      },
      getBeer() {
         return beerCount
      },
      getBeerPrice() {
         return beerPrice
      },
      buyWine(wine) {
         if (wine > wineCount) {
            return alert(`Too much wine, you cannot order more beer then ${wineCount}`)
         }
         wineCount -= wine
         balance += winePrice * wine
      },
      getBalance() {
         return balance
      },
      getWine() {
         return wineCount
      },
      getWinePrice() {
         return winePrice
      },
      buyPepsi(pepsi) {
         if (pepsi > pepsiCount) {
            return alert(`Too much pepsi, you cannot order more beer then ${pepsiCount}`)
         }
         pepsiCount -= pepsi
         balance += pepsiPrice * pepsi
      },
      getBalance() {
         return balance
      },
      getPepsi() {
         return pepsiCount
      },
      getPepsiPrice() {
         return pepsiPrice
      },
   }
})()




let balancePrice = document.querySelector('.main-card__price')
balancePrice.innerHTML = `${shop.getBalance()}грн`
   
let beerAmount = document.querySelector('.main-card__amount_beer')
beerAmount.innerHTML = `${shop.getBeer()}шт`
   
let wineAmount = document.querySelector('.main-card__amount_wine')
wineAmount.innerHTML = `${shop.getWine()}шт`
   
let pepsiAmount = document.querySelector('.main-card__amount_pepsi')
pepsiAmount.innerHTML = `${shop.getPepsi()}шт`


const products = []

function Product(type, count) {
   this.type = type;
   this.count = count
}



let addButton = document.querySelector('.main-card__button_add')

let buyButton = document.querySelector('.main-card__button_buy')

let basket = document.querySelector('.main-card__log-area-text')

let logArea = document.querySelector('.main-card__log-area')

let finalOutput = document.querySelector('.main-card__final')


function addToBasket() { 
   let input = document.querySelector('.main-card__input')
   let inputValue = input.value
   if (!inputValue) {
      return alert('Не вказана кількість')
   }
   let radio = document.querySelectorAll('.main-card__radio')
   let selectedRadioValue
   for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
         selectedRadioValue = radio[i].value
         break
      }
   }
   const product = new Product(selectedRadioValue, inputValue)
   products.push(product)
   let basketRow = document.createElement('p')
   basketRow.classList.add('main-card__log-area-text')
   basketRow.innerHTML = `${product.type}: ${product.count}шт`
   logArea.append(basketRow)
   return product
}

function Buy() {
   if (products.length == 0) {
      alert('Ви нічого не поклали до кошику')
   }
   for (let product of products) {

      switch (product.type) {
         case 'Пиво':
            shop.buyBeer(product.count)
            balancePrice.innerHTML = `${shop.getBalance()}грн`
            beerAmount.innerHTML = `${shop.getBeer()}шт`
            break
         case 'Вино':
            shop.buyWine(product.count)
            balancePrice.innerHTML = `${shop.getBalance()}грн`
            wineAmount.innerHTML = `${shop.getWine()}шт`
            break
         case 'Пепсі':
            shop.buyPepsi(product.count)
            balancePrice.innerHTML = `${shop.getBalance()}грн`
            pepsiAmount.innerHTML = `${shop.getPepsi()}шт`
            break
      }
      let finalProduct = document.createElement('p')
      finalProduct.classList.add('main-card__final-text')
      finalProduct.innerHTML = `${product.type}: ${product.count}шт`
      finalOutput.append(finalProduct)
   }
}

addButton.addEventListener('click', addToBasket)

buyButton.addEventListener('click', Buy)