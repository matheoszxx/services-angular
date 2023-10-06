import { Component, OnInit } from '@angular/core';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonServicesService } from 'src/app/services/pokemon-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: pokemonData | any
  attributesTypes:string[] = ['FIRE','POISON']

  constructor(
    //injetando o services E NÃO PRECISAMOS INSTANCIAR ELE
    private service: PokemonServicesService
  ) {  }

  ngOnInit(): void {
      this.service.getPokemon("charizard").subscribe(
        {
          next: result => {
            this.pokemon = {
              id: result.id,
              name: result.name,
              sprites: result.sprites,
              types: result.types
            }
            console.log(this.pokemon);


          },
          error: erro => console.log(erro)

        }
      )
  }

}
