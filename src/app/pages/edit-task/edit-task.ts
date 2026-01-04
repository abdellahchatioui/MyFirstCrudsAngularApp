import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../../services/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class Edit {
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTaskById(id).subscribe(
        task => 
          {
            this.task = task;
          }
      )
    }
  }
  save(){
    this.taskService.editTask(this.task,this.task.id).subscribe({
      next: () => {
        console.log("Edit with seccess !!");
        this.router.navigate(['/tasks'])
      },
      error(err) {
        console.log("error in editing" ,err);
      },
    }
    )
  }
  cancel(){
     this.router.navigate(['/tasks'])
  }
}

