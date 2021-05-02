import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  //public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading = new BehaviorSubject<boolean>(false);
  cast = this.isLoading.asObservable();

  changeAdmin(){
    this.isLoading.next(!this.isLoading.value);
  }

constructor() { }

}
