import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_Services/account.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
//injecting the accountservice to the constructor
  constructor(private accountservice: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountservice.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error =>{
        this.toastr.error(error.error);
        console.log(error);
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}