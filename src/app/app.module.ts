import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BackendInterceptor} from './backend.interceptor';

import { FormsModule} from '@angular/forms';
import { FormArray } from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
import { RecipeDataService } from './recipe-data.service';
import {routingComponents, AppRouterModule, routes} from './routing.module';

import { AppComponent } from './app.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { AlertComponent } from './alert/alert.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewRecipesComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ViewRecipeComponent,
    AlertComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RecipeDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
