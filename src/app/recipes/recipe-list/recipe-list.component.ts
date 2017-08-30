import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipe-Kitchen-Tomatoes-Food-Vegetable-729896.jpg'),
    new Recipe('Another Recipe', 'And again it is a test', 'http://goodtoknow.media.ipcdigital.co.uk/111/000015c49/ac30_orh412w625/apple-tarte-tatin-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
