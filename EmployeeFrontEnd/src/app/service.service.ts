import { Injectable } from '@angular/core';  
import { HttpClient,HttpHeaders }    from '@angular/common/http';  
@Injectable({  
  providedIn: 'root'  
})  
  
export class ServiceService {  
  
constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
  getData(){  
       
    return this.http.get('EmployeeServer/api/Employee');  //https://localhost:44352/ webapi host url  
  }  
  
  postData(formData){  
    return this.http.post('EmployeeServer/api/Employee',formData);  
  }  
  
  putData(id,formData){  
    return this.http.put('EmployeeServer/api/Employee/'+id,formData);  
  }  
  deleteData(id){  
    return this.http.delete('EmployeeServer/api/Employee/'+id);  
  }  
    
}