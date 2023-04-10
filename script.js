let addButton = document.querySelector('.main-card__button_add')

let buyButton = document.querySelector('.main-card__button_buy')

let radio = document.querySelector('.main-card__radio')

let input = document.querySelector('.main-card__input')

let basket = document.querySelector('.main-card__log-area-text')

let logArea = document.querySelector('.main-card__log-area')

const shop = (function () {
   let balance = 2000
   const beerCount = 150
   const wineCount = 120
   const pepsiCount = 100
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
      buyWine(pepsi) {
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

// let addToBasket = (function() {
//    let input = document.querySelector('.main-card__input')
//    let inputValue = input.value
//    if (!inputValue) {
//       return alert('Не вказана кількість')
//    }
//    let radio = document.querySelectorAll('.main-card__radio')
//    let selectedRadioValue
//    for (let i = 0; i < radio.length; i++) {
//       if (radio[i].checked) {
//          selectedRadioValue = radio[i].value
//          break
//       }
//    }
//    let basketRow = document.createElement('p')
//    basketRow.innerHTML = `${selectedRadioValue}: ${inputValue}шт`
//    logArea.append(basketRow.innerHTML)
//    return {
//       getAmount() {
//          return inputValue
//       },
//       getDrink() {
//          return selectedRadioValue
//       }
//    }
// })

// ------------ Визивається одразу -------------//

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
   let basketRow = document.createElement('p')
   basketRow.innerHTML = `${selectedRadioValue}: ${inputValue}шт`
   logArea.append(basketRow.innerHTML)
   let values = {
      getAmount() {
         return inputValue
      },
      getDrink() {
         return selectedRadioValue
      }
   }
   return values
}

// ------------ Не виходить дістатись до об'єкту який функція повертає -------------//

addButton.addEventListener('click', addToBasket)

console.log(addToBasket.values)

buyButton.addEventListener('click', () => alert('buy'))