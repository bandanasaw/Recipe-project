import { Component, OnInit } from "@angular/core";
// import { serverComponent } from "../server/server.component";

@Component({
  selector:'app-servers',
  templateUrl:'./servers.component.html'
})

export class serversComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  userName = '';
  serverCreated = false;

constructor(){
  setTimeout(()=>{
    this.allowNewServer = true;
  }, 2000);
}

ngOnInit() {}

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server was  created, Name is ' + this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUserName(event:Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
