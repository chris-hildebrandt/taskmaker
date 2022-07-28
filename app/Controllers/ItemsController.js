



export class ItemsController{
  constructor(){
    console.log("items controller loaded");
  }


  createItems(){
    window.event.preventDefault()
    let form = window.event.target

    let newItem = {
      name: form.name.value,
      complete: form.complete.checked
    }
  }
}