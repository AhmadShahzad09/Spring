import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FxDealDialogComponent } from './fx-deal-dialog/fx-deal-dialog.component';
import { FxDealListComponent } from './fx-deal-list/fx-deal-list.component';
import { AlertState, FxDeal } from './DataTypes';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fx-ui';
  loading = true;
  alertState = {
    visible: false,
    status: '',
    message: '',
  };

  @ViewChild('list') list?:FxDealListComponent;

  constructor(public dialog: MatDialog, private dataService: DataService) {}

  openDialog() {
    const dialogRef = this.dialog.open(FxDealDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        result.timestamp = new Date().toJSON();
        this.createFxDeal(result);
      }
    });
  }

  async createFxDeal(fxDeal: FxDeal) {
    //write your code here
  }

  setAlertState(alertState: AlertState) {
    this.alertState = alertState;
    // show alert for 3 seconds
    setTimeout(() => {this.alertState.visible = false;}, 3000);
  }

  onLoading(status: boolean) {
    this.loading = status;
  }

  refreshList() {
    this.list?.getAllFxDeals();
  }
}
