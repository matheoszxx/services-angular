import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {
  private baseURLApi: string =""
  private pokeData: any

  //injeto o HttpClient que é a classe do HttpClientModules no meu services
  constructor(private http: HttpClient) {
    this.baseURLApi = environment.pokeApi;
  }

  getPokemon(pokemonName:string){
    this.pokeData = this.http.get(`${this.baseURLApi}${pokemonName}`)
    console.log(this.pokeData);

  }
}
