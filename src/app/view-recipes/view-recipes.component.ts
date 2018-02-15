import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.less']
})
export class ViewRecipesComponent implements OnInit {

  recipes;

  constructor(private recipeDataService: RecipeDataService) { }

  ngOnInit() {
    this.recipeDataService.getRecipes()
      .subscribe(data => {console.log(data); this.recipes = data; });
  }

}
