import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";
import { User } from "./user.model";

@Injectable()
export class UserService
{
    users: User[] = [new User('Max',true),new User('Anna',true),new User('Bob',false),new User('Dylan',false)];

    constructor(private counterService:CounterService){}

    changeStatus(id:number)
    {
        this.users[id].active = !this.users[id].active;
        // if(user.active)
        //     this.counterService.InactiveToActive();
        // else
        //     this.counterService.ActiveToInactive();
        //user.active = !user.active;
    }
}