import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Cuisine, CuisineList} from "../interfaces/cuisine";

@Injectable({
  providedIn: 'root'
})
export class CuisineService {

  private cuisinesSubject$ = new BehaviorSubject<CuisineList[]>([]);
  public cuisines$: Observable<CuisineList[]> = this.cuisinesSubject$.asObservable();

  constructor(private http: HttpClient) {
  }

  public getAllCuisines(): void {
    this.http.get<Cuisine[]>(environment.baseUrl + "cuisine")
      .subscribe((cuisineList: Cuisine[]) => {
        this.cuisinesSubject$.next(CuisineService.convertInputFromBackEnd(cuisineList))
      })
  }

  private static convertInputFromBackEnd(backendCuisines: Cuisine[]): CuisineList[] {
    let frontendCuisines: CuisineList[] = [];
    return CuisineService.filterByContinent(backendCuisines, frontendCuisines);
  }

  private static filterByContinent(backendCuisines: Cuisine[], frontendCuisines: CuisineList[]): CuisineList[] {

    for (let i = 0; i < backendCuisines.length; i++) {
      let hasContinent: boolean = false;
      let indexJ: number = 0;

      for (let j = 0; j < frontendCuisines.length; j++) {
        if (frontendCuisines[j].continent === backendCuisines[i].continent) {
          hasContinent = true;
          indexJ = j;
        }
      }

      frontendCuisines = this.pushNewElements(backendCuisines, frontendCuisines, i, indexJ, hasContinent);
    }

    return frontendCuisines;
  }

  public static pushNewElements(backendCuisines: Cuisine[], frontendCuisines: CuisineList[], i: number, j: number, hasContinent: boolean): CuisineList[] {

    if (!hasContinent) {
      frontendCuisines.push({
        continent: backendCuisines[i].continent,
        countries: [{country: backendCuisines[i].country, id: backendCuisines[i].id}]
      })
    } else {
      frontendCuisines[j].countries.push({country: backendCuisines[i].country, id: backendCuisines[i].id})
    }

    return frontendCuisines;
  }

}
