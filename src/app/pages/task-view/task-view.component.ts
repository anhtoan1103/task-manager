import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {
  constructor(private taskService: TaskService) { }

  ngOninit() { }

  createNewList() {
    this.taskService.createList('Testing button').subscribe((response: any) => {
      console.log(response)
    });

  }
}
