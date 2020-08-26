import carsService from "../Services/CarsService.js";
import houseService from "../Services/Houseservice.js"
import STORE from "../store.js";

// console.log(3)
// private
function _drawHouses() {
  // console.log(6)
  let houses = STORE.State.houses
  let template = ''

  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  houses.forEach(c => template += c.Template)
  document.getElementById('houses').innerHTML = template
}


//Public
export default class HousesController {
  constructor() {
    // console.log(5)
    _drawHouses();
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      sqfoot: form.sqfoot.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    debugger
    houseService.createHouse(rawHouse)
    _drawHouses();
  }

  removeHouse(id) {
    debugger
    // console.log('hornk', id)
    houseService.removeHouse(id);
    _drawHouses();
  }

  bid(id) {
    houseService.bid(id);
    _drawHouses();
  }
}
