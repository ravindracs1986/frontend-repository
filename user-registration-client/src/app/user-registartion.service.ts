import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserRegistartionService {

  constructor(private http:HttpClient) { }

  public doRegistration(user: User){
    console.log('user is', user.name);
    return this.http.post("http://localhost:9191/userapi/addUser",user);
  }

  public getUsers(){
    return this.http.get("http://localhost:9191/userapi/users");
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:9191/userapi/user/"+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9191/userapi/delete/"+id);
  }

}
