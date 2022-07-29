import { Item } from "./Models/Item.js"
import { List } from "./Models/List.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  
  /** @type {import('./Models/List').List[]} */

  lists = [
    new List({
      id: 15,
      title: "Groceries",
      color: "bg-success",
    }),
  ]

  /** @type {import('./Models/Item').Item[]} */

  items = [
    new Item({
      title: 'Tomatoes',
      complete: false,
      listId: 15,
    }),
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
