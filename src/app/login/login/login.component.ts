import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:any
user:any
  constructor(private loginService:LoginService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl ('' , [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl ('' , Validators.required)
    });
  }
  loginAdmin(){
    console.log(this.loginForm.value)
   this.loginService.login(this.loginForm.value).subscribe((res:any)=>{
    console.log(res.user.role,"results")
      localStorage.setItem("role",res.user.role)
      localStorage.setItem("id",res.user.id)
      if(res.user.role==0){
        this.router.navigate(["/homeAdmin"])

      }
       if(res.user.role==1){
        this.router.navigate(["/homeUser"])

      }
      if(res.user.role==2){
        Swal.fire({title: "you must use mobile application", icon: "error"})

      }



   },error=>{ Swal.fire({title: "invalid data", icon: "error"})})
  }
  goRegister(){
    this.router.navigate(["/register"])
  }

}
