import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreatrionStatus = "No server was created!";
  serverName: string = '';
  serverCreated: boolean = false;
  servers = [];
  constructor()
  {
    setTimeout(()=>
    {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer()
  {
    this.serverCreatrionStatus = "Server was created! Name is " + this.serverName;
    this.servers.push(this.serverName)
    this.serverCreated = true;
  }
  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
