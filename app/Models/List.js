import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";




export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
  }

  get Template() {
    return `
      <div class="col-3 card m-2">
        <div class="row ${this.color} p-2" name="title" id="title"><h3>${this.title}<span class="btn" onclick="app.listsController.deleteList('${this.id}')">X</span></h3></div>
        <div class="col p-2">List Items Go Here</div>
      </div>
      `
  }



  get Items(){
    
  }


}
