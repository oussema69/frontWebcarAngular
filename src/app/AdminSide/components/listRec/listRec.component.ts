import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/Services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listRec',
  templateUrl: './listRec.component.html',
  styleUrls: ['./listRec.component.css']
})
export class ListRecComponent implements OnInit {


  recs:any[]=[]
  id:any
  idcar:any
  searchText:any
    constructor(private recservice:ReclamationService,private router:Router,private route:ActivatedRoute) { }

    ngOnInit() {
      this.id=this.route.snapshot.params["id"]
      console.log('id',this.id)
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

    goInter(id:any){
      this.router.navigate(["/homeAdmin/intervention/"+id])
    }

}
