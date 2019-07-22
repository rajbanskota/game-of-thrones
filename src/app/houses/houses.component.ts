import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../house.service';
import { HOUSES } from '../mock-houses';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses: any;

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.houses = this.getHouses();
  }

  // getHouses(): void {
  //   this.houses = this.houseService.getHouses();
  // }
  getHouses(): void {
    this.houseService.getHouses()
        .subscribe(houses => this.houses = houses);
  }
}
