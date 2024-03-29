import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingSrvice: LoggingService,private accountsService:AccountsService)
  {

  }
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id,status)
    //this.loggingSrvice.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
