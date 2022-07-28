import { ProxyState } from "../AppState.js";





export function saveState(){
  let alias =JSON.stringify(ProxyState.data)
  localStorage.setItem("key", alias)
}

export function loadState(){
  let rawData = localStorage.getItem("key")
  if(rawData){
    ProxyState.data = JSON.parse(rawData).map(d => new Class(d))
  }
}

// remember that you don't invoke functions with listeners, they are invoked when triggered like intervals