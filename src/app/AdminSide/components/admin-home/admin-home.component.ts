import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
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
  gocontact(){
this.router.navigate(["homeAdmin/contact"])
  }
  gointer(){
    this.router.navigate(["homeAdmin/intervention"])

  }
  goreclamation(){
    this.router.navigate(["homeAdmin/reclamation"])

  }
  goclient(){
    this.router.navigate(["homeAdmin/client"])

  }
  gotech(){
    this.router.navigate(["homeAdmin/tech"])

  }
}
