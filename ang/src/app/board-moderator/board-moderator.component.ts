import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  content: string;

  constructor(private userService: UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe(
      data => {
        console.log('admin ok');
        this.content = data;
      },
      err => {
        console.log('admin error');
        this.route.navigate(['/']);      }
    );
  }

}
