import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const AUTH_API = 'http://localhost:8080/api/project/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  createProject(project) {
    return this.http.post(AUTH_API + 'create', {
      projectName: project.projectName
    }, httpOptions);
  }

  // tslint:disable-next-line:typedef
  getProjects() {
    return this.http.get(AUTH_API + 'list');
  }

  // tslint:disable-next-line:typedef
  getProjectById(projectId: string) {
    console.log('get project by id ' + projectId);
    return this.http.get(AUTH_API + projectId);
  }
}
