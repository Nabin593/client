import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';

@Component({
  selector: 'app-test-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css'
})
export class TestErrorComponent {
  baseUrl = 'https://localhost:44316/api/';
  validationErrors:string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void{

  }
  get404Error(){
    this.http.get(this.baseUrl + 'Buggy/Not-Found').subscribe({
      next: Response => console.log(Response),
      error: error => console.log(error)
    })
  }  
  get400Error(){
    this.http.get(this.baseUrl + 'Buggy/Bad-request').subscribe({
      next: Response => console.log(Response),
      error: error => console.log(error)
    })
  }  
  get500Error(){
    this.http.get(this.baseUrl + 'Buggy/Server-error').subscribe({
      next: Response => console.log(Response),
      error: error => console.log(error)
    })
  }
  get400ValidationError(){
    this.http.post(this.baseUrl + 'Account/register',{}).subscribe({
      next: Response => console.log(Response),
      error: error => {
        console.log(error);
        this.validationErrors= error;
      }
    })
  }
}
