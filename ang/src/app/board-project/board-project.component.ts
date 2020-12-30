import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogCreateProjectComponent} from './dialog-create-project.component';
import {ProjectService} from '../_services/project.service';

@Component({
  selector: 'app-board-project',
  templateUrl: './board-project.component.html',
  styleUrls: ['./board-project.component.css']
})
export class BoardProjectComponent implements OnInit {

  content: string;
  projects: any = [];

  constructor(private userService: UserService, private route: Router, public dialog: MatDialog, private projectService: ProjectService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateProjectComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProjects();
    });
  }

  addProjectToList(pm: string): void {
    this.projects.push({projectName: pm});
  }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        // @ts-ignore
        console.log('admin ok');
        this.content = data;
      },
      err => {
        // @ts-ignore
        console.log('admin error');
        this.route.navigate(['/']);
      }
    );

    this.getAllProjects();

  }

  getAllProjects(): void {
    this.projects = [];
    this.projectService.getProjects().subscribe(
      data => {
        this.projects = data;
        // @ts-ignore
        console.log(this.projects);
      }, error => {
        // @ts-ignore
        console.log(error);
      }
    );
  }

  goToProject(projectId: string): void {
    this.route.navigate(['/project/' + projectId]);
  }

}



