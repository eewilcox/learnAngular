import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('name1', 'desc1', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA', [new Ingredient('apple', 1), new Ingredient('pear', 2)]),
    new Recipe('name2', 'desc2', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA', [new Ingredient('pie', 5), new Ingredient('celery', 2)]),
    new Recipe('name3', 'desc3', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA', [new Ingredient('pizza', 1)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
