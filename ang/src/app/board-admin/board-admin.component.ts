import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;

  constructor(private userService: UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
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
