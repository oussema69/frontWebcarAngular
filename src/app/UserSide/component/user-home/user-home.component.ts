import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  clicked: any;
  nom:any;
  prenom:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.nom=localStorage.getItem("nom")
    this.prenom=localStorage.getItem("prenom")
  }
logout(){
  localStorage.removeItem("role")
  localStorage.removeItem("id")
  this.router.navigate(["/login"])


}
goprofile(){
  this.router.navigate(["homeUser/profile"])
}
goreclamation(){
  this.router.navigate(["homeUser/rec"])

}
govoiture(){
  this.router.navigate(["homeUser/voiture"])

}
}
