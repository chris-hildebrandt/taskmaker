



export class Model{
constructor({alias, alias, ...}){
  this.id = alias.id || generateId()
}

// or constructor (data){
  // this.alias = data.alias
// }

get Template(){
  return``
}

}