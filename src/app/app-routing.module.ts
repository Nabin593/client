// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { MemberListComponent } from './members/member-list/member-list.component';
// import { MemberDetailComponent } from './members/member-detail/member-detail.component';
// import { ListsComponent } from './lists/lists.component';
// import { MessagesComponent } from './messages/messages.component';
// import { authGuard } from './_guards/auth.guard';
// import { TestErrorComponent } from './errors/test-error/test-error.component';
// import { NotFoundComponent } from './errors/not-found/not-found.component';
// import { ServerErrorComponent } from './errors/server-error/server-error.component';

// const routes: Routes = [
//   {path:'', component:HomeComponent},
//   {path:'',
//     runGuardsAndResolvers: 'always',
//     canActivate: [authGuard],
//     children: [
//       {path:'Members', component:MemberListComponent},
//       {path:'Members/:username', component:MemberDetailComponent},
//       {path:'Lists', component:ListsComponent},
//       {path:'Messages', component:MessagesComponent},
//     ]
//   },
//   {path: 'Errors', component:TestErrorComponent},
//   {path: 'not-found', component:NotFoundComponent},
//   {path: 'Server-error', component:ServerErrorComponent},
//   {path:'**', component:NotFoundComponent, pathMatch: 'full'},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'Members', component: MemberListComponent },
      { path: 'members/username/:username', component: MemberDetailComponent },
      { path: 'member/edit', component: MemberEditComponent },
      { path: 'Lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent },
    ]
  },
  { path: 'errors', component: TestErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
