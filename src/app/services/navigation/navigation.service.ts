import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private data?: any;

  constructor(private router: Router) {
  }

  public navigateAndStoreData(path: string, data: any): void {
    this.data = data;
    this.router.navigate([path]);
  }

  public storeData(data: any): void {
    this.data = data;
  }

  public loadData(): any {
    return this.data;
  }
}
