import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('ServerContent',{static: true}) ServerContent :ElementRef; 
  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({name: serverName.value,content: this.ServerContent.nativeElement.value});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({name: serverName.value,content: this.ServerContent.nativeElement.value});
  }
}
