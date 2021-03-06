import { generateId } from "../utils.js";
// console.log(0)
export default class House {
  // Object Destructuring
  constructor({ sqfoot, bathrooms, bedrooms, price, img, description }) {
    // console.log(2);
    this.id = generateId()
    this.sqfoot = sqfoot
    this.bathrooms = bathrooms
    this.bedrooms = bedrooms
    this.price = price
    this.img = img
    this.description = description || "no description"
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title"> Square Feet: ${this.sqfoot} Bedrooms: ${this.bedrooms} Bathrooms: ${this.bedrooms}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.houseController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.houseController.bid('${this.id}')">+ $100</button>
                  <p>Price: $${this.price}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}