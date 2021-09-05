import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RecipeInterface} from "../../interfaces/recipe-interface";

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private recipeListSubjectTop3Rated = new BehaviorSubject<RecipeInterface[]>([]);
  private recipeListSubjectTop5Newest = new BehaviorSubject<RecipeInterface[]>([]);
  private recipeListSubjectResult = new BehaviorSubject<RecipeInterface[]>([]);

  private top3ratedRecipesList: Observable<RecipeInterface[]> = this.recipeListSubjectTop3Rated.asObservable();
  private top5newestRecipesList: Observable<RecipeInterface[]> = this.recipeListSubjectTop5Newest.asObservable();
  private resultRecipesList: Observable<RecipeInterface[]> = this.recipeListSubjectResult.asObservable();

  private singleRecipe = new Subject<RecipeInterface>();

  private totalRecipesByInputAndFilter = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  public returnTop5newestRecipesList(): Observable<RecipeInterface[]> {
    return this.top5newestRecipesList;
  }

  public returnTop3ratedRecipesList(): Observable<RecipeInterface[]> {
    return this.top3ratedRecipesList;
  }

  public returnResultRecipesList(): Observable<RecipeInterface[]> {
    return this.resultRecipesList;
  }

  public returnSingleRecipe(): Subject<RecipeInterface> {
    return this.singleRecipe;
  }

  public returnTotalByInputAndFilter(): Subject<number> {
    return this.totalRecipesByInputAndFilter;
  }

  public addRecipe(recipe: RecipeInterface): void {
    this.http.post<RecipeInterface>(environment.baseUrl + "recipe/post", recipe).subscribe();
  }

  public getRecipeById(id: number): void {
    this.http.get<RecipeInterface>(environment.baseUrl + "recipe/get/" + id).subscribe(singleRecipe => this.singleRecipe.next(singleRecipe));
  }

  public deleteRecipe(id: number): void {
    this.http.delete<RecipeInterface>(environment.baseUrl + "recipe/delete/" + id).subscribe();
  }

  public editRecipe(editedRecipe: RecipeInterface, id: number): void {
    this.http.put<RecipeInterface>(environment.baseUrl + "recipe/put/" + id, editedRecipe).subscribe();
  }

  public getAllRecipesByInputAndFilter(url: string, page: number, quantity: number): void {
    this.http.get<RecipeInterface[]>(environment.baseUrl + "recipe/result" + url + "&page=" + page + "&quantity=" + quantity).subscribe((recipeList: RecipeInterface[]) => {
        this.recipeListSubjectResult.next(recipeList)
      }, error => {
        this.recipeListSubjectResult.next([]);
      }
    );
  }

  public countAllRecipesByInputAndFilter(url: string): void {
    this.http.get<number>(environment.baseUrl + "recipe/result/total" + url).subscribe((total: number) => {
      this.totalRecipesByInputAndFilter.next(total)
    }, error => {
      this.totalRecipesByInputAndFilter.next(0.0)
    });
  }

  public getTop3Recipes(): void {
    this.http.get<RecipeInterface[]>(environment.baseUrl + "recipe/top3rated").subscribe((recipeList: RecipeInterface[]) => {
      this.recipeListSubjectTop3Rated.next(recipeList)
    });
  }

  public getNewestRecipes(): void {
    this.http.get<RecipeInterface[]>(environment.baseUrl + "recipe/top5newest").subscribe((recipeList: RecipeInterface[]) => {
      this.recipeListSubjectTop5Newest.next(recipeList);
    });
  }

}
