import { Component } from "@angular/core";

@Component({
  selector:"app-server",
  templateUrl:"./server.component.html",
  styleUrls: ["./server.component.scss"]
})

export class serverComponent{
 serverId:number = 10;
 serverStatus:string = 'offline';
 showSecret = false;
 log: any[] = [];

 constructor(){
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline ';
 }

 getColor(){
  return this.serverStatus = 'online' ? 'green' : 'red';
 }

 getServerStatus(){
  return this.serverStatus;
 }

//  OnShowSecret(){
//   this.showSecret = true;
//  }

OnToggleDetails(){
  this.showSecret = !this.showSecret;
//  this.log.push(this.log.length + 1);
  this.log.push(new Date());
  }

}
