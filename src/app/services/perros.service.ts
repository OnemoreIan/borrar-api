import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  private API_DOGS = 'https://dog.ceo/api/breed/hound/images';

  constructor(private http: HttpClient) { }

  public getImgDogs():Observable<any>{
    return this.http.get(this.API_DOGS);
  }

}
