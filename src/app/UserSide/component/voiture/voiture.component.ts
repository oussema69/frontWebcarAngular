import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/Services/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
cars:any[]=[]
id:any
searchText: any;
  constructor(private carService:CarService,private router:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem("id")
    this.getAll(this.id)

  }
  getAll(id:any){
    this.carService.getAll(id).subscribe(res=>{
      console.log("reson",res)
      this.cars=res;

    })
  }
  delete(id:any){
    if(confirm("tu veut supprimer cette voiture??")) {

    this.carService.delete(id).subscribe(res=>{
      this.getAll(this.id)

      Swal.fire({title:"vous avez supprimer cet voiture",icon:"success"})
    },error=>{ Swal.fire({title: "invalid data", icon: "error"})})
  }
  }
  update(id:any){
    this.router.navigate(["/homeUser/editCar/"+id])
  }
  goAdd(){
    this.router.navigate(["/homeUser/addCar"])

  }
}
