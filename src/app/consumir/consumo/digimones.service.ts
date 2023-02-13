import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DigimonesService {

  private API_SERVER = 'https://digimon-api.vercel.app/api/digimon';

  constructor(private http:HttpClient){

   }

   public getDigimones():Observable<any>{
    return this.http.get(this.API_SERVER);
   }

}
