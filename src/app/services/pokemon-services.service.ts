import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {
  private baseURLApi: string =""

  constructor() {
    this.baseURLApi = environment.pokeApi;
  }

  getPokemon(pokemonName:string){
    console.log(pokemonName);
  }
}
