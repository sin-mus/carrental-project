import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/features/dashboard/types/task.interface';


@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.css']
})
export class TaskEditDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { task: Task },
    private dialogRef: MatDialogRef<TaskEditDialogComponent>
  ) {}

  ngOnInit() {
    // Component initialization
  }

  save() {
    // Perform any necessary validation or data manipulation
    // Emit the edited task back to the parent component
    this.dialogRef.close(this.data.task);
  }
}
