import { Injectable } from '@angular/core';
import{
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../_Services/account.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor{

  constructor(private accountService: AccountService){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        if(user){
          request = request.clone({
            setHeaders:{
              Authorization: `Bearer ${user.token}`
            }
          })
        }
      }
    })
    return next.handle(request);
  }
}

// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable, take } from 'rxjs';
// import { AccountService } from '../_Services/account.service';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {

//   constructor(private accountService: AccountService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     this.accountService.currentUser$.pipe(take(1)).subscribe({
//       next: (user: any) => {
//        // console.log('User:', user); // Debugging line
//         if (user) {
//           request = request.clone({
//             setHeaders: {
//               Authorization: `Bearer ${user.token}` // Ensure this is a backtick (`)
//             }
//           });
//           console.log('Modified Request:', request); // Debugging line
//         }
//       },
//       error: (err) => {
//         console.error('Error retrieving user:', err); // Debugging line
//       }
//     });
//     return next.handle(request);
//   }
// }


