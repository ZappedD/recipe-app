import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.less']
})
export class ViewRecipeComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  recipe;

  constructor(private route: ActivatedRoute, private recipeDataService: RecipeDataService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.recipeDataService.getRecipe(this.id)
        .subscribe(data => {
          console.log(data);
          this.recipe = data;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
