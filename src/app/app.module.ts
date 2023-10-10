import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { serversComponent } from './servers/servers.component';
import { warningAlert } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';

import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { HttpModle } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    serversComponent,
    warningAlert,
    HeaderComponent,
    RecipesComponent,
 
    RecipeDetailsComponent,
      RecipeListComponent,
      RecipeItemComponent,
      ShoppingListComponent,
      ShoppingEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
