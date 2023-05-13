import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/Services/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addCar',
  templateUrl: './addCar.component.html',
  styleUrls: ['./addCar.component.css']
})
export class AddCarComponent implements OnInit {
id:any
  form:any
  constructor(private userS:CarService,private router:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem("id")
    this.form = new FormGroup({
      matricule : new FormControl ('' , Validators.required),
      user_id : new FormControl (this.id, Validators.required),
      model : new FormControl ('', Validators.required),
    });
  }
  onSubmit(){
  this.userS.add(this.form.value).subscribe(res=>{
    Swal.fire({title:"vous avez ajouter une voiture",icon:"success"})
    this.router.navigate(["/homeUser/voiture"])
  },error=>{
    console.log(error)
    Swal.fire({title:error.error.error.message,icon:"error"})

  })
  }


}
