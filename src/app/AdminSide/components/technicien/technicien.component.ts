import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechnicienComponent implements OnInit {
  searchText!:string
users: User[] = []
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.getAll(2)


  }
  getAll(id:any){
    this.userService.getAll(id).subscribe(res=>{
      this.users=res.users;
      console.log(this.users)

    })
  }
  update(id:any){
   this.router.navigate(["/homeAdmin/edit/"+id])
  }
  delete(id:any){
    if(confirm("you sure to delete this categorie!! ?")) {

    this.userService.delete(id).subscribe(res=>{

      Swal.fire({title:"vous avez supprimer cet utulisateur",icon:"success"})
      this.getAll(2);
    },error=>{ Swal.fire({title: "invalid data", icon: "error"})})
  }
  }
  goAdd(){
    this.router.navigate(['homeAdmin/add'])
  }
  goRec(id:any){
    this.router.navigate(["/homeAdmin/reclamation/"+id])
  }
}
