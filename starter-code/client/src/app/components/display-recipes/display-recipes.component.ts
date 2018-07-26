import { Component, OnInit } from '@angular/core';
import { RetrieveDishesService } from '../../services/retrieve-dishes.service';

@Component({
  selector: 'app-display-recipes',
  templateUrl: './display-recipes.component.html',
  styleUrls: ['./display-recipes.component.css']
})
export class DisplayRecipesComponent implements OnInit {

  constructor(private retrieveDishes: RetrieveDishesService) {
    retrieveDishes.retrieveAll();
  }

  ngOnInit() {
  }

}
