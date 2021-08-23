import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Recipe} from "../interfaces/recipe";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesSubject$ = new BehaviorSubject<Recipe[]>([]);
  public recipes$: Observable<Recipe[]> = this.recipesSubject$.asObservable();

  private singleRecipeSubject$ = new BehaviorSubject<any>(undefined);
  public singleRecipe$: Observable<Recipe> = this.singleRecipeSubject$.asObservable();

  constructor(private http: HttpClient) {
  }

  addRecipe(recipe: Recipe): void {
    this.http.post<Recipe>(environment.baseUrl + "recipe/post", recipe).subscribe((newRecipe: Recipe) => {
      this.recipesSubject$.next([...this.recipesSubject$.value, newRecipe])
    });
  }

  getAllRecipes(): void {
    this.http.get<Recipe[]>(environment.baseUrl + "recipe").subscribe((recipeList: Recipe[]) => {
      this.recipesSubject$.next(recipeList)
    });
  }

  getAllRecipesByInput(input: string): void {
    this.http.get<Recipe[]>(environment.baseUrl + "recipe/getinput/" + input).subscribe((recipeList: Recipe[]) => {
      this.recipesSubject$.next(recipeList);
    })
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(environment.baseUrl + "recipe/get/" + id);
  }

  deleteSong(id: number): void {
    this.http.delete<Recipe>(environment.baseUrl + "recipe/delete/" + id).subscribe(() => {
      this.recipesSubject$.next([...this.recipesSubject$.value.filter(recipe => recipe.id !== id)]);
    })
  }

  //INPLEMENTIEREN: PUT, SIMILAR UND NEWEST

}
