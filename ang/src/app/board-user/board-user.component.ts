import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: string;

  constructor(private userService: UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        console.log('admin ok');
        this.content = data;
      },
      err => {
        console.log('admin error');
        this.route.navigate(['/']);
      }
    );
  }
}
