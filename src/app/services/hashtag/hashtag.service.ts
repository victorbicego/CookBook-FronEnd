import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {HashtagInterface} from "../../interfaces/hashtag-interface";

@Injectable({
  providedIn: 'root'
})

export class HashtagService {

  private hashtagListSubject = new BehaviorSubject<HashtagInterface[]>([]);
  private hashtagList: Observable<HashtagInterface[]> = this.hashtagListSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  public returnHashtagList(): Observable<HashtagInterface[]> {
    return this.hashtagList;
  }

  public getAllHashTags(): void {
    this.http.get<HashtagInterface[]>(environment.baseUrl + "hashtag/all").subscribe((hashtagList: HashtagInterface[]) => {
      this.hashtagListSubject.next(hashtagList);
    })
  }

}
