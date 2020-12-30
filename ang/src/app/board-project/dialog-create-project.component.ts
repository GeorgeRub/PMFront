import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProjectService} from '../_services/project.service';

// import {BoardProjectComponent} from './board-project.component';

@Component({
  selector: 'app-dialog-create-project',
  templateUrl: 'dialog-create-project.component.html',
})

export class DialogCreateProjectComponent implements OnInit {

  form: any = {};
  content: string;
  newProject: any = {};

  constructor(public dialog: MatDialog, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    console.log('dialog init');
  }

  createProject(): void {
    // @ts-ignore
    console.log('create project');
    // @ts-ignore
    console.log(this.form);
    this.projectService.createProject(this.form).subscribe(data => {
      // @ts-ignore
      console.log(data);
      this.newProject = data;
      if (this.newProject.success) {
        this.dialog.closeAll();
      } else {
        this.content = this.newProject.message;
      }
    }, error => {
      // @ts-ignore
      console.log(error);
    });
  }

}
