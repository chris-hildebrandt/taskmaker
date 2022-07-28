import { generateId } from "../Utils/generateId.js"



export class Item{
  constructor(data){
    this.id = data.id || generateId()
    this.title = data.title
    this.complete = data.complete
    this.listId = data.listId
  }


  get Template(){
    return `
    <h5>
      <input type="checkbox" id="" name="item" value="${this.complete}">
      <label for="item">${this.name}</label><br>
      </h5>
    <button class='btn btn-danger' onclick='app.itemsController.deleteItem(${this.id})'>Delete</button>
    `
  }
}