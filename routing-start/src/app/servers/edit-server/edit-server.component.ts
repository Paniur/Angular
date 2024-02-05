import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  serverID:number;
  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }
  canDeactivate(): boolean | Promise<boolean> | Observable<boolean>
  {
    if (!this.allowEdit)
      return true;
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved)
      return confirm('Do you want to discard the changes?');
    else
      return false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((parms: Params)=>
    {
      this.allowEdit = parms['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    this.serverID = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.params.subscribe((params: Params) => {
      this.serverID = +params['id'];
      this.server = this.serversService.getServer(this.serverID);
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    //this.router.navigate(['../'], { relativeTo: this.route });
  }

}
