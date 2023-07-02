import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/features/dashboard/types/task.interface';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrls: ['./task-tab.component.css']
})
export class TaskTabComponent implements OnInit {
  activeTab: string = 'administration';
  tasks: Task[];

  // new variables for pagination
  thePageNumber: number = 0;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private dialog: MatDialog,) { }

  ngOnInit() {
    this.listTasks();
  }

  listTasks() {
    // now get the products for the given type of tasks
    this.tasksService.getTaskListPaginate(this.thePageNumber,
      this.thePageSize,
      this.activeTab).subscribe(this.processResult());
  }
  changeTasks(type: string) {
    this.activeTab = type;
    this.listTasks();
  }

  openEditDialog(task: Task) {

    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '400px', // Set the desired width of the dialog
      data: { task }, // Pass the task object to the dialog component
    });

    dialogRef.afterClosed().subscribe((editedTask: Task) => {
      // Perform any necessary actions with the edited task
      if (editedTask) {
        // Update the task in your list or perform any other logic
        this.updateTask(task, editedTask);
      }
    });
  }

  handleListTasks() {
    // check if "type" parameter is available
    const hasType: boolean = this.route.snapshot.paramMap.has('type');

    if (hasType) {
      // get the "type" param string.
      this.activeTab = this.route.snapshot.paramMap.get('type');
    }
    else {
      // not type available ... default to administration tab
      this.activeTab = "administration";
    }

    console.log(`currentType=${this.activeTab}, thePageNumber=${this.thePageNumber}`);

    // now get the tasks for the given type
    this.tasksService.getTaskListPaginate(this.thePageNumber - 1,
      this.thePageSize,
      this.activeTab)
      .subscribe(this.processResult());


  }
  updateTask(task: Task, editedTask: Task) {
    this.tasksService.updateTask(task, editedTask);
  }

  processResult() {
    return data => {
      console.log(data);
      this.tasks = data._embedded.tasks;
      this.thePageNumber = data.page.number;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

}
