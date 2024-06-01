import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {path:'Members', component:MemberListComponent},
      {path:'Members/:id', component:MemberDetailComponent},
      {path:'Lists', component:ListsComponent},
      {path:'Messages', component:MessagesComponent},
    ]
  },
  {path:'**', component:HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
