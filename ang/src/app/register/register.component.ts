import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  userRoles = new Array<Roles>();

  constructor(private authService: AuthService) {
    this.authService.userRoles().subscribe(data => {
        console.log('list of roles');
        console.log(data);
        this.userRoles = data.map(v => new Roles(v.shortName, false));
        console.log(this.userRoles);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }


  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.form, this.userRoles).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}

export class Roles {
  shortName;
  checked: boolean;

  constructor(shortName: string, checked: boolean) {
    this.shortName = shortName;
    this.checked = checked;
  }
}
