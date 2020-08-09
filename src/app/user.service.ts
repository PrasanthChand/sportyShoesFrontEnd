import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9003/user"
  }

  public createUser(user: User) {
    return this.http.post<User>(this.url, user);
  }
  
  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+"s");
  }

  public deleteByUserId(userId: number): Observable<User>{
     return this.http.delete<User>(this.url + "/" + userId);
  }

  public findByUserId(userId: number): Observable<User>{
    return this.http.get<User>(this.url + "/" + userId);
  }

  public updateUser (user: User) {
    return this.http.put<User>(this.url, user);
  }
}
