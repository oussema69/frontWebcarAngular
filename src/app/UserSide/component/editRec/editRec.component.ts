import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'src/app/Model/Reclamation';
import { CarService } from 'src/app/Services/car.service';
import { ReclamationService } from 'src/app/Services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editRec',
  templateUrl: './editRec.component.html',
  styleUrls: ['./editRec.component.css']
})
export class EditRecComponent implements OnInit {
  recs:Reclamation=new Reclamation();

  cars:any
 id:any
 form:any
 recId:any
  constructor(private carService:CarService,private recS:ReclamationService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=localStorage.getItem("id")
    this.recId=this.route.snapshot.params["id"]
    this.getcarbyuder(this.id)
    this.getRecById(this.recId)

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

console.log(this.form.value,"ffffffffffffffffff")
if(  !this.form.get('desinstallation').value &&
!this.form.get('repartition').value &&
!this.form.get('reinstallation').value &&
!this.form.get('nouvelinstallation').value &&
!this.form.get('option').value &&
!this.form.get('sim').value){
      Swal.fire({title:"vous devez choisir minimum un choix",icon:"error"})

}else{
  this.recS.update( this.recId,this.form.value).subscribe(res=>{
    Swal.fire({title:"vouz avez Editer cette reclamation",icon:"success"})
    this.router.navigate(["/homeUser/rec"])
  },error=>{
   console.log(error)
  })
}

  }

  getRecById(id:any){
    this.recS.getByid(id).subscribe(res=>{
      this.recs=res
      this.form = new FormGroup({
        desinstallation : new FormControl (this.recs.desinstallation === 1 ? true : false),
        repartition : new FormControl (this.recs.repartition === 1 ? true : false),
        car_id : new FormControl (this.recs.car_id),
        reinstallation : new FormControl (this.recs.reinstallation === 1 ? true : false),
        nouvelinstallation : new FormControl (this.recs.nouvelinstallation === 1 ? true : false),
        option : new FormControl (this.recs.option === 1 ? true : false),
        isValid : new FormControl (false),
        sim : new FormControl (this.recs.sim === 1 ? true : false ),

      });
      console.log("mtar",this.recs)
    })
  }
}
