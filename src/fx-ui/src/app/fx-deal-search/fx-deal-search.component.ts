import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { AlertState } from '../DataTypes';

@Component({
  selector: 'fx-deal-search',
  templateUrl: './fx-deal-search.component.html',
  styleUrls: ['./fx-deal-search.component.css']
})
export class FxDealSearchComponent {
  fxDeal = undefined;
  searchForm = this.formBuilder.group({
    searchText: [''],
  });

  @Output() loading = new EventEmitter<boolean>();
  @Output() alert = new EventEmitter<AlertState>();

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {}

  searchFormSubmit() {
    const searchText = this.searchForm.value.searchText;
    if (searchText) {
      this.getFxDealByUniqueId(searchText);
    }
  }

  async getFxDealByUniqueId(id: string) {
    //write your code here
  }

}
