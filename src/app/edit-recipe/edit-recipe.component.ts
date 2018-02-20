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
  public result;
  public ingredience;

  constructor(private route: ActivatedRoute, private recipeDataService: RecipeDataService) {
    this.user = localStorage.getItem('username');

    // this.choices = [{id: 'ingridince1', amountOfUnit: 'amountOfUnit1', unit: 'unit1'}, {
    //   id: 'ingridince2',
    //   amountOfUnit: 'amountOfUnit2',
    //   unit: 'unit2'
    // }];
  }

  ngOnInit() {
    this.user = localStorage.getItem('username');
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.recipeDataService.getRecipe(this.id)
        .subscribe(data => {
          console.log(data);
          this.recipe = data;
        });
    });
    // let itemNumb = 0;
    //   for (let ingredience of this.recipe.get) {
    //     this.ingredience.push({
    //       id: 'ingridince' + itemNumb,
    //       amountOfUnit: 'amountOfUnit' + itemNumb,
    //       unit: 'unit' + itemNumb,
    //       typeRecipe: this.recipe.ingredience.type,
    //       amountOfUnitRecipe: this.recipe.ingredience.amountOfUnit,
    //       unitRecipe: this.recipe.ingredience.unit
    //     });
    //     itemNumb++;
    //   }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public addNewChoices() {
    let newItemNo = this.ingredience.length + 1;
    this.ingredience.push({
      id: 'ingridince' + newItemNo,
      amountOfUnit: 'amountOfUnit' + newItemNo,
      unit: 'unit' + newItemNo
    });
  }

  public removeChoice() {
    let lastItem = this.ingredience.length--;
    this.ingredience.splice(lastItem);
  }


}
