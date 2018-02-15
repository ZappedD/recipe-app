import {Component, OnInit} from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.less']
})
export class AddRecipeComponent implements OnInit {

  public choices;
  public newRecipe;

  constructor(private recipeDataService: RecipeDataService) {
    this.choices = [{id: 'ingridince1', amountOfUnit: 'amountOfUnit1', unit: 'unit1'}, {
      id: 'ingridince2',
      amountOfUnit: 'amountOfUnit2',
      unit: 'unit2'
    }];
  }

  ngOnInit() {
  }

  public getLoggedIn() {
    if  (localStorage.getItem('key')) {
      return true;
    }
    return false;
  }
  public addNewChoices() {
    let newItemNo = this.choices.length + 1;
    this.choices.push({id: 'ingridince' + newItemNo, amountOfUnit: 'amountOfUnit' + newItemNo, unit: 'unit' + newItemNo});
  }

  public removeChoice() {
    let lastItem = this.choices.length--;
    this.choices.splice(lastItem);
  }

  public postARecipe(recipe) {
    let ingredience = [];
    for (let i = 1; i <= this.choices.length; i++) {
      ingredience.push({
        type: (<HTMLInputElement>document.getElementById('ingridince' + i)).value,
        amountOfUnit: (<HTMLInputElement>document.getElementById('amountOfUnit' + i)).value,
        unit: (<HTMLInputElement>document.getElementById('unit' + i)).value
      });
    }

    if (localStorage.getItem('username')) {
      recipe.ingredience = ingredience;
      recipe.user = localStorage.getItem('username');
      console.log(ingredience);
      console.log(recipe);
      this.recipeDataService.postRecipe(recipe)
        .subscribe(data => {
          console.log(data);
        }),
        error => {
          console.log(error);
        };

    }
  }
}
