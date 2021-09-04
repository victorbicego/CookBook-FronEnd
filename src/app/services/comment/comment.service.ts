import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RecipeService} from "../recipe/recipe.service";
import {CommentInterface} from "../../interfaces/comment-interface";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  private commentListSubject = new BehaviorSubject<CommentInterface[]>([]);
  private commentList: Observable<CommentInterface[]> = this.commentListSubject.asObservable();

  private topComment = new Subject<CommentInterface>();

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  public returnTopComment(): Subject<CommentInterface> {
    return this.topComment;
  }

  public returnCommentList(): Observable<CommentInterface[]> {
    return this.commentList;
  }

  public addComment(comment: CommentInterface): void {
    this.http.post<CommentInterface>(environment.baseUrl + "comments/post", comment).subscribe((newComment: CommentInterface) => {
      this.commentListSubject.next([...this.commentListSubject.value, newComment]);
      this.recipeService.getRecipeById(comment.recipe.id!);
    });
  }

  public getAllCommentsByRecipe(recipeId: number): void {
    this.http.get<CommentInterface[]>(environment.baseUrl + "comments/allbyrecipe/" + recipeId).subscribe((commentList: CommentInterface[]) => {
      this.commentListSubject.next(commentList)
    });
  }

  public deleteComment(id: number, recipeId: number): void {
    this.http.delete<CommentInterface>(environment.baseUrl + "comments/delete/" + id).subscribe(() => {
      this.commentListSubject.next([...this.commentListSubject.value.filter(comment => comment.id !== id)]);
      this.recipeService.getRecipeById(recipeId);
    })
  }

  public getTopCommentByRecipe(recipeId: number): void {
    this.http.get<CommentInterface>(environment.baseUrl + "comments/topbyrecipe/" + recipeId).subscribe(topComment => {
      this.topComment.next(topComment);
    });
  }

}
