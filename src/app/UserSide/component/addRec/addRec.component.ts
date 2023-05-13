import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/Services/car.service';
import { ReclamationService } from 'src/app/Services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addRec',
  templateUrl: './addRec.component.html',
  styleUrls: ['./addRec.component.css']
})
export class AddRecComponent implements OnInit {
 cars:any
 id:any
 form:any
  constructor(private carService:CarService,private recS:ReclamationService,private router:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem("id")
    this.getcarbyuder(this.id)
    this.form = new FormGroup({
      desinstallation : new FormControl (false ),
      repartition : new FormControl (false),
      car_id : new FormControl (false),
      reinstallation : new FormControl (false),
      nouvelinstallation : new FormControl (false),
      option : new FormControl (false),
      sim : new FormControl (false ),

    });
  }


  getcarbyuder(id:any){
    this.carService.getAll(id).subscribe(res=>{
      console.log("reson",res)
      this.cars=res;

    })
  }
  onSubmit(){
    this.form.get('car_id').valueChanges.subscribe((value:any) => {
      this.form.get('car_id').setValue(value);
    });
    if((
      !this.form.get('desinstallation').value &&
      !this.form.get('repartition').value &&
      !this.form.get('reinstallation').value &&
      !this.form.get('nouvelinstallation').value &&
      !this.form.get('option').value &&
      !this.form.get('sim').value
    )){
      Swal.fire({title:"il faut minimum un choix",icon:"error"})

    }else{


    this.recS.add(this.form.value).subscribe(res=>{
      Swal.fire({title:"vouz avez ajouter une nouvelle reclamation",icon:"success"})
      this.router.navigate(["/homeUser/rec"])
    },error=>{
      Swal.fire({title:error.error.error.message,icon:"error"})
     console.log(error)
    })
  }
    console.log("form",this.form.value)

  }
}

