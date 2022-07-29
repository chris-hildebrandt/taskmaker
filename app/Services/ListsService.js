import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

class ListsService{

  createList(newList){
    ProxyState.lists = [...ProxyState.lists, new List(newList)]
  }

  deleteList(id){
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
  }

  toggleCollapse(listId){
    let list = ProxyState.lists.find(l => l.id = listId)
    list.collapsed = !list.collapsed

    ProxyState.lists = ProxyState.lists 
    // to force a draw from our listener
  }
}

export const listsService = new ListsService()