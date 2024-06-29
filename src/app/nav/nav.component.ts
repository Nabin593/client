import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_Services/account.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../_models/User';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    model: any = {};

  constructor(public accountService: AccountService, private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Login() {
    this.accountService.Login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/Members')
      
    })
  }
  LogOut(){
    this.accountService.Logout();
    this.router.navigateByUrl('/');
  }
}
