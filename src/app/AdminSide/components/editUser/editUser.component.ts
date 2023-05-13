import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {
form:any
user:User=new User();
id:any
  constructor(private userService:UserService,private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.id=this.route.snapshot.params[("id")]
    this.getUserById(this.id)


  }
  getUserById(id:any){
  this.userService.getByid(id).subscribe(res=>{
    this.user=res.user
    this.form = new FormGroup({
      email : new FormControl (this.user.email , [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      nom : new FormControl (this.user.nom , Validators.required),
      prenom : new FormControl (this.user.prenom , Validators.required),
      password : new FormControl ('', Validators.required),
      tel : new FormControl (this.user.tel ? this.user.tel.toString():'' , Validators.required),
      role:new FormControl (this.user.role , Validators.required),




    });
  })

  }
  onSubmit(){
    if(this.form.value.password === '') {
      delete this.form.value.password;
    }

    this.userService.update(this.id, this.form.value).pipe(
      tap(response => {
        if (response.error) {
          throw new Error(response.error.message);
        }
      })
    ).subscribe(res => {
      Swal.fire({title: "vous avez editez cet utulisateur", icon: "success"});

    }, error => {
      Swal.fire({title: error.message, icon: "error"});
    });

  }

}
