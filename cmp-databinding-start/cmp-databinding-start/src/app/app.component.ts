import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'string',content:'string'},{type:'server',name:'string',content:'string'}];
  
  onServerAdded(severData:{name: string, content:string}) {
    this.serverElements.push({
      type: 'server',
      name: severData.name,
      content: severData.content
    });
  }

  onBlueprintAdded(bluePrindData:{name: string, content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrindData.name,
      content: bluePrindData.content
    });
  }
}
