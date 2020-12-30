import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './_helpers/auth.service';
import { BoardProjectComponent } from './board-project/board-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogCreateProjectComponent} from './board-project/dialog-create-project.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ShowProjectComponent} from './board-project/show-project.component';
// import {Bootstrap} from 'bootstrap/dist';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    BoardProjectComponent,
    DialogCreateProjectComponent,
    ShowProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
    // Bootstrap
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
