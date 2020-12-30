import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ProjectService} from '../_services/project.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html'
})

export class ShowProjectComponent implements OnInit {

  project: ShowProject;
  private sub: any;
  projectId: string;

  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private route: Router, private actRoute: ActivatedRoute, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    console.log('init');
    this.userService.getUserBoard().subscribe(
      data => {
        console.log('admin ok');
        console.log(data);
      },
      err => {
        console.log('admin error');
        this.route.navigate(['/']);
      }
    );

    this.sub = this.actRoute.params.subscribe(params => {
      this.projectId = params.id;
    });

    this.projectService.getProjectById(this.projectId).subscribe(data => {
      console.log('data from server');
      console.log(data);
      this.project = (data as ShowProject);
    }, error => {
      console.log(error);
    });

  }
}

export class ShowProject {

  projectName: string;
  taskList: Array<ShowProjectTask>;

  constructor(project: any) {
    this.projectName = project.projectName;
    if (project.taskList != null) {
      this.taskList = project.taskList;
    }
  }


}


export class ShowProjectTask {

  id: string;
  taskName: string;

}
