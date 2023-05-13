import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/Services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-techReclamation',
  templateUrl: './techReclamation.component.html',
  styleUrls: ['./techReclamation.component.css']
})
export class TechReclamationComponent implements OnInit {


  recs:any[]=[]
  id:any
  idcar:any
  searchText!:string

    constructor(private recservice:ReclamationService,private router:Router,private route:ActivatedRoute) { }

    ngOnInit() {
      this.id=this.route.snapshot.params["id"]
      this.getAll(this.id)

    }
    getAll(id:any){
      this.recservice.getrecBytechId(id).subscribe(res=>{
        console.log("reson",res)
        this.recs=res.data;
        this.idcar=res.data
        console.log("idcar",this.idcar)

      })
    }
    delete(id:any){
      if(confirm("tu veut supprimer cette voiture??")) {

      this.recservice.delete(id).subscribe(res=>{
        this.getAll(this.id)

        Swal.fire({title:"vous avez supprimer cet reclamation",icon:"success"})
      },error=>{ Swal.fire({title: "invalid data", icon: "error"})})
    }
    }

    update(id:any){

      this.router.navigate(["/homeUser/editRec/"+id])
    }
    goAdd(){
      this.router.navigate(["/homeUser/addRec"])

    }
    goInter(id:any){
      this.router.navigate(["/homeAdmin/intervention/"+id])
    }

}
