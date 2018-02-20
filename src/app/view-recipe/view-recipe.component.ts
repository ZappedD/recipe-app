import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.less'],
  providers: [LoginService]
})
export class ViewRecipeComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  recipe;
  public user;
  public result;

  constructor(private route: ActivatedRoute, private recipeDataService: RecipeDataService, private loginService: LoginService) {
  this.user = localStorage.getItem('username');
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
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public removeRecipe() {
    this.recipeDataService.removeRecipe(this.id).subscribe(data => {
      console.log(data);
      this.result = data;
    }), error => {
      console.log(error);
      this.result = false;
    };
  }

}
