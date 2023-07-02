import { Injectable } from '@angular/core';
import { AdministrationTask, MechanicsTask, OtherTask, Task } from '../features/dashboard/types/task.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseUrl: string = "http://localhost:8080/tasks";
  tasks: Task[];

  constructor(private httpClient: HttpClient) { }

  updateTask(task: Task, editedTask: Task) {
    task.name = editedTask.name;
  }

  getTaskListPaginate(thePage: number,
    thePageSize: number,
    type: string): Observable<GetResponseTasks> {

    // need to build URL based on category id, page and size 
    const searchUrl = `${this.baseUrl}/search/findByTypeContaining?type=${type}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseTasks>(searchUrl);
  }
  
  getTaskList(type: string){
    const searchUrl = `${this.baseUrl}/search/findByTypeContaining?type=${type}`;

    return this.httpClient.get<GetResponseTasks>(searchUrl);
  }

}

interface GetResponseTasks {
  _embedded: {
    tasks: Task[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}