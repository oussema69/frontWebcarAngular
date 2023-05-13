import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contacts:any[]=[]
searchText: any;
  constructor(private userS:UserService) { }

  ngOnInit() {
this.getAll()
  }
  getAll(){
    this.userS.getAllcontact().subscribe(res=>{
      this.contacts=res
    })
  }
delete(id:any){
  if(confirm("vous coulez supprimer cet contact!! ?")) {
  this.userS.deleteContact(id).subscribe(res=>{
    Swal.fire({title:"vous avez supprimer cet contect",icon:"success"})

  },error=>{
    Swal.fire({title:"server eror",icon:"error"})
  })
}
}
}
