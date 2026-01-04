import { Component, signal, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TaskService,Task } from '../services/task';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
    taskLevel = signal("Medium");
    tasks: Task[] = [];
    lastId: string = "";

    newTask: Task = {
      id: '' ,
      title: '',
      level: '',
      completed: false ,
    }

    constructor(private taskService : TaskService){};

  
    ngOnInit(){
      this.getTask();
    }

    getTask(){
      this.taskService.getTasksFromApi()
        .subscribe(data => {
          this.tasks = [...data]; 
          console.log("Data : ",data);
        }
        );
   
    }

    addTask(){
      this.lastId = this.tasks.at(-1)?.id ?? "0";
      const incrementId: number = Number(this.lastId) + 1; 
      this.newTask.id = ( incrementId.toString() || "0");
      this.tasks.push({ ...this.newTask });
      this.taskService.postTask(this.newTask)
        .subscribe( {
            next: (response) => {
              this.newTask.title = "";
              this.getTask();
            },
            error: (err) => console.log("error in adding" ,err)
          }
        );
         this.newTask = {
          id: '',
          title: '',
          level: '',
          completed: false
        };
    };
      
    deleteTask(id: string) {      
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          this.tasks = this.tasks.filter(task => task.id !== id);
        },
        error: (err) => {
          console.error('Delete failed: Check if ID exists on port 4000', err);
        }
      });} 

}
