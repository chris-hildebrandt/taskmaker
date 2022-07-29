import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"


function _draw(){
  let template = ""
  ProxyState.lists.forEach(list => template += list.Template)
  document.getElementById("lists").innerHTML = template
}

export class ListsController{
  constructor() {
    ProxyState.on("lists", _draw)
    _draw()
  }

  createList(){
    window.event.preventDefault()
    let form = window.event.target

    let newList = {
      title: form.title.value,
      color: form.color.value
    }

    listsService.createList(newList)
    form.reset()
  }

  deleteList(id){
    console.log(id);
    listsService.deleteList(id)
  }

  toggleCollapse(lisId){
    listsService.toggleCollapse(listId)
  }

}