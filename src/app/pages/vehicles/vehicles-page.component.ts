import { Component, inject, OnInit, signal } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { ResponseVehiclesList } from '../../interfaces/vehicles-interface';

@Component({
  selector: 'app-vehicles-page',
  standalone: true,
  imports: [],
  templateUrl: './vehicles-page.component.html',
  styleUrl: './vehicles-page.component.scss',
})
export default class VehiclesPageComponent implements OnInit {
  private readonly productsSvc = inject(VehiclesService);
  products$ = this.productsSvc.getAutosList();
  listData: ResponseVehiclesList | undefined;
  constructor() {}

  ngOnInit(): void {
    this.getAllApi();
  }

  getAllApi() {
    this.products$.subscribe(
      (response) => {
       setTimeout(() => {
         this.listData = response;
       }, 1000);
      },
      (error) => {
        console.error('Error al obtener la Api', error);
      }
    );
  }
}
