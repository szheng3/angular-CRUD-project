import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Select} from '@ngxs/store';
import {RecipesState} from 'src/app/store/recipes/recipes.state';
import {Observable} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Select(RecipesState.getRecipes) recipes$: Observable<Recipe[]>;
  isBrowser: boolean;

  constructor(private recipeService: RecipeService, private title: Title, private meta: Meta,@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.title.setTitle('First Component');
    const metaItems = [
      {name: 'description', content: 'First component description.'},
      {name: 'twitter:title', content: 'Angular Universal Server Side Rendering | DevGlan'},
      {name: 'twitter:description', content: 'In this article, we will be discussing about server-side rendering of Angular app.'},
      {property: 'og:title', content: 'Angular Universal Server Side Rendering | DevGlan'},
      {itemprop: 'name', content: 'First component name.'},
      {itemprop: 'description', content: 'In this article, we will be discussing about server-side rendering of Angular app.'},
    ];
    this.meta.addTags(metaItems, true);
  }
}
