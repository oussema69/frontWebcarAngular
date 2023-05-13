import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/Services/car.service';
import { ReclamationService } from 'src/app/Services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css']
})
export class RecComponent implements OnInit {

  recs:any[]=[]
  id:any
  idcar:any
  searchText:any
    constructor(private recservice:ReclamationService,private router:Router) { }

    ngOnInit() {
      this.id=localStorage.getItem("id")
      this.getAll(this.id)

    }
    getAll(id:any){
      this.recservice.getByUseId(id).subscribe(res=>{
        console.log("reson",res)
        this.recs=res;
        this.idcar=res
        console.log("idcar",this.idcar)

      })
    }
    delete(id:any){
      if(confirm("tu veut supprimer cette voiture??")) {

      this.recservice.delete(id).subscribe(res=>{
        this.getAll(this.id)

        Swal.fire({title:"vous avez supprimer cet voiture",icon:"success"})
      },error=>{ Swal.fire({title: "invalid data", icon: "error"})})
    }
    }

    update(id:any){

      this.router.navigate(["/homeUser/editRec/"+id])
    }
    goAdd(){
      this.router.navigate(["/homeUser/addRec"])

    }
    goToInterv(id:any){
      this.router.navigate(["/homeUser/userinter/"+id])
    }


}
