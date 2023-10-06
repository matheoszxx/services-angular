export type pokemonData = {
  name:string
  id:number
  sprites: {
    front_default: string
  }
  types:{
    slot: 1
    type: {
      name: string
      url: string
   }
  }[]
}
