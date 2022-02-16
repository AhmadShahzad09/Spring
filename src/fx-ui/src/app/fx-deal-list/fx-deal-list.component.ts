import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { AlertState } from '../DataTypes';

@Component({
  selector: 'fx-deal-list',
  templateUrl: './fx-deal-list.component.html',
  styleUrls: ['./fx-deal-list.component.css']
})
export class FxDealListComponent {
  fxDeals = [];

  @Output() loading = new EventEmitter<boolean>();
  @Output() alert = new EventEmitter<AlertState>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllFxDeals();
  }

  async getAllFxDeals() {
    //write your code here
  }

}
