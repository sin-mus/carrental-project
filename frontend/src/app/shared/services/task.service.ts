import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/modules/home/components/task-tab/task-tab.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
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