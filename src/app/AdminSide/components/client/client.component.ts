import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  Search!:string
  users: User[] = []
  searchText!:string
    constructor(private userService:UserService,private router:Router) { }

    ngOnInit() {
      this.getAll(1)


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
        this.getAll(1);
      },error=>{ Swal.fire({title: "invalid data", icon: "error"})})
    }
    }
    gorec(id:any){
      this.router.navigate(["/homeAdmin/recL/"+id])
    }
    gocar(id:any){
      this.router.navigate(["/homeAdmin/car/"+id])

    }
}
