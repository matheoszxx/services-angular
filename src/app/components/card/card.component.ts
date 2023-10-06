import { Component, OnInit } from '@angular/core';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonServicesService } from 'src/app/services/pokemon-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: pokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  }

  constructor(
    //injetando o services E NÃO PRECISAMOS INSTANCIAR ELE
    private service: PokemonServicesService,
    private typeColorService: PokemonServicesService,
  ) {  }

  ngOnInit(): void {
      this.getPokemon("pikachu")
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: result => {
          this.pokemon = {
            id: result.id,
            name: result.name,
            sprites: result.sprites,
            types: result.types
          }
          console.log(this.pokemon);
        }
      }
    )
  }

  getTypeColor(type: string): string {
    return this.typeColorService.getColorForType(type);
  }

}
