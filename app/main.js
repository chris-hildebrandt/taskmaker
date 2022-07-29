import { ValuesController } from "./Controllers/ValuesController.js";
import { ListsController } from "./Controllers/ListsController.js";
import { ItemsController } from "./Controllers/ItemsController.js"

class App {
  // valuesController = new ValuesController();

  listsController = new ListsController();

  itemsController = new ItemsController()
}

window["app"] = new App();


// start in models
// export class List{
//   constructor(data){

// create html for the Templates

// create data in appstate give dummy ids to check linking! create a few links for testing
// import to AppState
// build controllers and draw function remember to test the constructor create id in html for injection point

// to inject a template in a template, remember to give the items a class ${this.ItemsTemplate}
// create a getter get ItemsTemplate(){
// let template = ''
// proxyState.items.filter(i => i.listId == this.id).foreach(i => template += i.Template) this still needs to be filtered
// }
// always test filters and if they are wrong switch == for !=
// never fully type anything! use ctrl-p to quickly 
// when your cursor is on a new class, you can ctrl-. or ctrl-spcbr to bring up the move to new file shortcut
//drop TODO if you have to leave something to do something else
//${ this is JS land, you can run any JS inside this }


// TODO !!! css user-select: none, draggable: false;