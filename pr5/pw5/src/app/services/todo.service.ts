import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private http = inject(HttpClient);
  
  private apiUrl = "https://69b11abdadac80b427c3fff2.mockapi.io/api/v1/todoItem";

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  update(id: string, data: Partial<Todo>): Observable<Todo> {
    alert("Завдання 1: Реалізуйте метод update!");
    throw new Error("Метод update не реалізовано");
  }

  remove(id: string): Observable<void> {
    alert("Завдання 2: Реалізуйте метод remove!");
    throw new Error("Метод remove не реалізовано");
  }
}
