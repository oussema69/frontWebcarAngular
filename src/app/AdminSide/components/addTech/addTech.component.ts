import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addTech',
  templateUrl: './addTech.component.html',
  styleUrls: ['./addTech.component.css']
})
export class AddTechComponent implements OnInit {
  form:any
  constructor(private userS:UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl ('' , [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      nom : new FormControl ('' , Validators.required),
      prenom : new FormControl ('' , Validators.required),
      password : new FormControl ('', Validators.required),
      tel : new FormControl ('' , Validators.required),
      role:new FormControl (2, Validators.required),




    });
  }
  onSubmit(){
  this.userS.add(this.form.value).subscribe(res=>{
    Swal.fire({title:"vous avez ajouter un nouveau technicien",icon:"success"})
  },error=>{
    console.log(error)
    Swal.fire({title:error.error.error.message,icon:"error"})

  })
  }

}
