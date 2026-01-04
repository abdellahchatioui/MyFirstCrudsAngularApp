import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id : string;
  title : string;
  level : string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:4000/tasks'; 
  private http = inject(HttpClient);

  getTasksFromApi(): Observable<Task[]>{
    return this.http.get<Task[]>(
      'http://localhost:4000/tasks'
    )
  };

   getTaskById(id :string): Observable<Task>{
    return this.http.get<Task>(
      `http://localhost:4000/tasks/${id}`
    )
  };
  
  postTask(newTask: Task ): Observable<Task>{
    return this.http.post<Task>(
      'http://localhost:4000/tasks',
      newTask
    )
  };


deleteTask(id: string): Observable<Task> {
  const url = `${this.apiUrl}/${id}`; 
  return this.http.delete<Task>(url);
}

editTask(edittask : Task, id : string): Observable<Task> {
   const url = `${this.apiUrl}/${id}`; 
   return this.http.put<Task>(url, edittask);
}

}
