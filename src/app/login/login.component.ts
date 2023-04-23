import { Component} from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  model : User = new User();
  constructor(private accountService: AccountService){}

  login(){
    this.accountService.login(this.model);
    console.log(this.model.username);
    console.log(this.model.password);
    console.log(this.accountService.isLoggedIn());
   } ;
}