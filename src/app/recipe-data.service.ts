import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeDataService {


  constructor(private http: HttpClient) { }

  public getRecipes() {
    // let url: string = 'http://localhost:8080/recipe-backend/api/recipes';
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/recipes';
    let urlL: string = 'http://localhost:8080/recipe-backend/api/recipes';
    return this.http.get(url);
  }

  public getRecipe(id) {
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/recipe/' + id.toString();
    let urlL: string = 'http://localhost:8080/recipe-backend/api/recipe/' + id.toString();
    return this.http.get(url);
  }

  public postRecipe(data) {
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/addRecipe';
    let urlL: string = 'http://localhost:8080/recipe-backend/api/addRecipe';
    return this.http.post(url, JSON.stringify(data));
  }

  public updateRecipe(data, id) {
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/recipe/' + id.toString() + '/update';
    let urlL: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/recipe/' + id.toString() + '/update';
    return this.http.put(url, JSON.stringify(data));
  }
  public removeRecipe(id) {
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/delete/recipe/' + id.toString();
    let urlL: string = 'http://localhost:8080/recipe-backend/api/delete/recipe/' + id.toString();
    return this.http.delete(url);
  }



}
