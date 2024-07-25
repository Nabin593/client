import { Injectable, model } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptorFn } from '@angular/common/http';
import{
  HttpRequest,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class errorInterceptor implements HttpInterceptor{
  constructor(private router: Router, private toastr:ToastrService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((Error:HttpErrorResponse) => {  
        if(Error){
          switch(Error.status){
            case 400:
              if(Error.error.errors){
                const modelStateErrors = [];
                for(const key in Error.error.error){
                  if (Error.error.error[key]){
                    modelStateErrors.push(Error.error.error[key]);
                  }
                }
                throw modelStateErrors.flat();
              }else{
                this.toastr.error(Error.error, Error.status.toString())
              }
              break;
            case 401:
              this.toastr.error('UnAutorized', Error.status.toString());
              break;
            case 404:
              this.router.navigateByUrl('/Not-Found');
              break;
            case 500:
              const navigationExtras: NavigationExtras = {state:{error:Error.error.error}};
              this.router.navigateByUrl('/Server-error', navigationExtras);
              break;
            default:
              this.toastr.error('Something unexpected went wrong');
              console.log(Error);
              break;
            }
          }
          throw Error;
        })
      )
    }
  }
