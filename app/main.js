import { ValuesController } from "./Controllers/ValuesController.js";
import { ListsController } from "./Controllers/ListsController.js";
import { ItemsController } from "./Controllers/ItemsController.js"

class App {
  // valuesController = new ValuesController();

  listsController = new ListsController();

  itemsController = new ItemsController()
}

window["app"] = new App();
