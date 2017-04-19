import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
    recipes: Recipe[] = [
      new Recipe('name', 'desc', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA'),
      new Recipe('name', 'desc', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA'),
      new Recipe('name', 'desc', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzYIce0G9YVmDLDRlZkSJ4KBI4GlylfUBlO66ZgBfNu8Ek9dYbeA')
    ];

  ngOnInit() {
  }

}
