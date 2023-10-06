import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { pokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {
  private baseURLApi: string =""
  private pokeData: pokemonData | any

  private typeColors: { [key: string]: string } = {
    grass: '#77c850',
    fire: '#ee7f30',
  }

  //injeto o HttpClient que é a classe do HttpClientModules no meu services
  constructor(private http: HttpClient) {
    this.baseURLApi = environment.pokeApi;
  }

  getPokemon(pokemonName:string):Observable<pokemonData>{
    this.pokeData = this.http.get<pokemonData>(`${this.baseURLApi}${pokemonName}`)
    return this.pokeData
  }

  getColorForType(type: string): string {
    const lowercaseType = type.toLowerCase()
    return this.typeColors[lowercaseType] || '#000000'
  }
}
