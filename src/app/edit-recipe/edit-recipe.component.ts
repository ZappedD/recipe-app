import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeDataService} from "../recipe-data.service";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.less']
})
export class EditRecipeComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  recipe;
  public user;

  public amount;

  constructor(private route: ActivatedRoute, private recipeDataService: RecipeDataService) {
    this.user = localStorage.getItem('username');
    this.amount = 0;
  }

  ngOnInit() {
    this.amount = 0;
    this.user = localStorage.getItem('username');
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.recipeDataService.getRecipe(this.id)
        .subscribe(data => {
          this.recipe = data;
        });
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.amount = 0;
  }

  public getAmount() {
    return this.amount;
  }

  public updateAmount() {
    this.amount++;
  }

  public resetAmount() {
    this.amount = 0;
  }

  public updateRecipe(recipe) {
    let newIngredience = [];
    // for (let i = this.amount; i > 1; i--) {
    //   if ((<HTMLInputElement>document.getElementById('ingridince' + i))) {
    //     newIngredience.push({
    //       type: (<HTMLInputElement>document.getElementById('ingridince' + i)).value,
    //       amountOfUnit: (<HTMLInputElement>document.getElementById('amountOfUnit' + i)).value,
    //       unit: (<HTMLInputElement>document.getElementById('unit' + i)).value
    //     });
    //   }
    //   else {
    //     i = -1;
    //   }
    // }
    // for (let i = 0; i <= this.choices.length; i++) {
    //   ingredience.push({
    //     type: (<HTMLInputElement>document.getElementById('ingridince' + i)).value,
    //     amountOfUnit: (<HTMLInputElement>document.getElementById('amountOfUnit' + i)).value,
    //     unit: (<HTMLInputElement>document.getElementById('unit' + i)).value
    //   });
    // }
    let i = 0;
    while ((<HTMLInputElement>document.getElementById('ingridince' + i))) {
      newIngredience.push({
        type: (<HTMLInputElement>document.getElementById('ingridince' + i)).value,
        amountOfUnit: (<HTMLInputElement>document.getElementById('amountOfUnit' + i)).value,
        unit: (<HTMLInputElement>document.getElementById('unit' + i)).value
      });
      i++;
    }

    if (localStorage.getItem('username')) {
      recipe.ingredience = newIngredience;
      recipe.user = localStorage.getItem('username');
      console.log(newIngredience);
      console.log(recipe);
      this.recipeDataService.updateRecipe(recipe, this.id)
        .subscribe(data => {
          console.log(data);
        }),
        error => {
          console.log(error);
        };

    }
  }


}
