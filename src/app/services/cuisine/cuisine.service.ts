import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CuisineInterface} from "../../interfaces/cuisine-interface";

@Injectable({
  providedIn: 'root'
})

export class CuisineService {

  private cuisineListSubject = new BehaviorSubject<CuisineInterface[]>([]);
  private cuisineList: Observable<CuisineInterface[]> = this.cuisineListSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  public returnCuisineList(): Observable<CuisineInterface[]> {
    return this.cuisineList;
  }

  public getContinentList(): string[] {
    const continentList: string[] = [];

    this.cuisineList.subscribe(cuisineList => {
      cuisineList.forEach(cuisine => {
        if (!this.hasContinent(continentList, cuisine.continent)) {
          continentList.push(cuisine.continent)
        }
      })
    })

    return continentList;
  }

  public getAllCuisines(): void {
    this.http.get<CuisineInterface[]>(environment.baseUrl + "cuisine/all").subscribe((cuisineList: CuisineInterface[]) => {
      this.cuisineListSubject.next(cuisineList);
    })
  }

  private hasContinent(continentList: string[], continentToCheck: string): boolean {
    let hasContinent: boolean = false;

    continentList.forEach(continent => {
      if (continent === continentToCheck) {
        hasContinent = true;
      }
    })

    return hasContinent;

  }

}
