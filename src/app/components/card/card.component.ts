import { Component, OnInit } from '@angular/core';
import { PokemonServicesService } from 'src/app/services/pokemon-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name: string = "CHARMANDER"
  attributesTypes:string[] = ['FIRE','POISON']

  constructor(
    //injetando o services E NÃO PRECISAMOS INSTANCIAR ELE
    private service: PokemonServicesService
  ) {  }

  ngOnInit(): void {
      this.service.getPokemon("charizard").subscribe(
        {
          next: result => console.log(result),
          error: erro => console.log(erro)

        }
      )
  }

}
