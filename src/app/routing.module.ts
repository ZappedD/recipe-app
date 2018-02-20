  import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ViewRecipesComponent} from './view-recipes/view-recipes.component';
  import {ViewRecipeComponent} from './view-recipe/view-recipe.component';
  import {AddRecipeComponent} from './add-recipe/add-recipe.component';
  import {EditRecipeComponent} from "./edit-recipe/edit-recipe.component";

export const routes: Routes = [
  {path: '', component: ViewRecipesComponent},
  {path: 'view-recipe/:id', component: ViewRecipeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add', component: AddRecipeComponent},
  {path: 'edit-recipe/:id', component: EditRecipeComponent}
];

export const routingComponents = [LoginComponent];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {
}

