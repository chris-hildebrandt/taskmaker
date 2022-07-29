import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
    this.collapsed = data.collapsed || false

  }

  get Template() {
    return `
      <div class="col-3 card border selectable no-select m-2" onclick="app.listsController.toggleCollapse('${this.id}')">
        <div class="row ${this.color} p-2" name="title" id="title"><h3>${this.title}<span class="btn" onclick="app.listsController.deleteList('${this.id}')">X</span></h3></div>
        <ul class="col p-2${this.collapsed ? 'collapse' : ''}">
          
        </ul>
      </div>
      `
  }



  get Items(){

  }


}
