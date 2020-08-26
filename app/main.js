import CarsController from "./Controllers/CarsController.js";
import HouseController from "./Controllers/HouseController.js";
console.log(4)
class App {
  carsController = new CarsController();
  houseController = new HouseController();

}

window["app"] = new App();
