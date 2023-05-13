import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form:any
  constructor(private router:Router,private authS:LoginService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl ('' , [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      name : new FormControl ('' , Validators.required),
      number : new FormControl ('' , Validators.required),
      message : new FormControl ('' , Validators.required)


    });
  }
  goContact(){
  }
  goLogin(){
    this.router.navigate(["/login"])
  }
  onSubmit() {
  this.authS.contact(this.form.value).subscribe(res=>{
    Swal.fire({title: "reclamation envoye avec succées", icon: "success"})
  })
  }
}
