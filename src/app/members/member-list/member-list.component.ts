import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/_Services/members.service';
import { Member } from 'src/app/_models/Member';
import { Photo } from 'src/app/_models/Photo';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  members: Member[] = [];

  constructor(private memberService: MembersService) { }
  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }


  loadMembers(){
    this.memberService.getMembers().subscribe({
      next: members => this.members = members
    })
  }

  loadMembers() {
    this.memberService.getMembers().subscribe({
      next: members => {
        members = members;
        //console.log(members);
         debugger;
       },
      error: err => {
        console.error('Error loading members:', err);
      }
    });
  }
}
