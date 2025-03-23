import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseVehiclesList } from '../interfaces/vehicles-interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }

  private readonly _http = inject(HttpClient);
  private apiUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';

  getAutosList(): Observable<ResponseVehiclesList>{
    return this._http.get<ResponseVehiclesList>(this.apiUrl);
  }

}
