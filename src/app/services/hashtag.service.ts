import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Hashtag} from "../interfaces/hashtag";

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  private hashtagsSubject$ = new BehaviorSubject<Hashtag[]>([]);
  public hashtags$: Observable<Hashtag[]> = this.hashtagsSubject$.asObservable();

  constructor(private http: HttpClient) {
  }

  public getAllHashTags(): void {
    this.http.get<Hashtag[]>(environment.baseUrl + "hashtag")
      .subscribe((hashtagList: Hashtag[]) => {
        this.hashtagsSubject$.next(hashtagList)
      })
  }
}
