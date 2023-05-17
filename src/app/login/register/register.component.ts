import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private registerS:LoginService) { }
 form:any
  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl ('' , [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl ('' , Validators.required),
      prenom:new FormControl ('' , Validators.required),
      nom:new FormControl ('' , Validators.required),
      tel:new FormControl ('' , Validators.required),
      role:new FormControl (1 , Validators.required)
    });
  }
  goLogin(){
    this.router.navigate(["login"])
  }
  goContact(){
    this.router.navigate(["/home"])

  }
  onSubmit(){
    console.log(this.form.value,"hhhhhhhhhhh")
  this.registerS.register(this.form.value).subscribe(res=>{
    Swal.fire({title: 'welcome you are registred now', icon: "success"})
    this.router.navigate(["/login"])
  } , error => {
    console.log(error);
    Swal.fire({title: error.error.error.message, icon: "error"})




})}
  }
