import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }
    recipes: Recipe[] = [
      new Recipe('name1', 'desc1', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA'),
      new Recipe('name2', 'desc2', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA'),
      new Recipe('name3', 'desc3', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA')
    ];

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
