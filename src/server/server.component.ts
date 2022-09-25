import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    allowNewServer=false;
    ServerID = 10;
    ServerStatus = 'online';
    getServerStatus(){
        return this.ServerStatus;
    }
    constructor() {
        setTimeout(() =>{
            this.allowNewServer = true;
        },2000);

    }

}