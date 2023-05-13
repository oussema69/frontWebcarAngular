import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Car } from 'src/app/Model/Car';
import { CarService } from 'src/app/Services/car.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editCar',
  templateUrl: './editCar.component.html',
  styleUrls: ['./editCar.component.css']
})
export class EditCarComponent implements OnInit {

  form:any
  car:Car=new Car();

  id:any
    constructor(private carsService:CarService,private route:ActivatedRoute,private router:Router) {

    }

    ngOnInit() {
      this.id=this.route.snapshot.params[("id")]
      this.getCarById(this.id)


    }
    getCarById(id:any){
    this.carsService.getByid(id).subscribe(res=>{
      this.car=res.car

      this.form = new FormGroup({
        matricule : new FormControl (this.car.matricule),
        model : new FormControl (this.car.model , Validators.required),
        user_id : new FormControl (this.car.user_id , Validators.required),
      });
    })

    }
    onSubmit(){
      if(this.form.value.password === '') {
        delete this.form.value.password;
      }

      this.carsService.update(this.id, this.form.value).pipe(
        tap(response => {
          if (response.error) {
            throw new Error(response.error.message);
          }
        })
      ).subscribe(res => {
        Swal.fire({title: "vous avez editez cet utulisateur", icon: "success"});
        this.router.navigate(["/homeUser/voiture"])

      }, error => {
        Swal.fire({title: error.error.message, icon: "error"});
      });

    }

}
