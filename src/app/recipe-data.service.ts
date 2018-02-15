import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeDataService {


  constructor(private http: HttpClient) { }

  public getRecipes() {
    // let url: string = 'http://localhost:8080/recipe-backend/api/recipes';
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/recipes';
    let urlL: string = 'http://localhost:8080/recipe-backend/api/recipes';
    console.log(urlL);
    return this.http.get(urlL);
  }

  public getRecipe(id) {
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/recipe/' + id.toString();
    let urlL: string = 'http://localhost:8080/recipe-backend/api/recipe/' + id.toString();
    console.log(url);
    return this.http.get(urlL);
  }

  public postRecipe(data) {
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/addRecipe';
    let urlL: string = 'http://localhost:8080/recipe-backend/api/addRecipe';
    return this.http.post(urlL, JSON.stringify(data));
  }



}
