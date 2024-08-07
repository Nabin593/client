import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users:any;

  constructor() { }

  ngOnInit(): void {
    // this.getUsers();
  }
  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  // getUsers(){
  //   this.http.get('https://localhost:44316/api/Users').subscribe({
  //     next: Response => this.users = Response,
  //     error: error => console.log(error),
  //     complete: () => console.log('Request has completed')
  //   })
  // }

  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }
}
