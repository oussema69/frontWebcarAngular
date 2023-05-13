import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterventionService } from 'src/app/Services/intervention.service';
import { ReclamationService } from 'src/app/Services/reclamation.service';

@Component({
  selector: 'app-userIntervention',
  templateUrl: './userIntervention.component.html',
  styleUrls: ['./userIntervention.component.css']
})
export class UserInterventionComponent implements OnInit {
interventionid:any
id:any
options:any[]=[]
diagnostic:any[]=[]
inter:any[]=[]
  constructor(private reclamationS:ReclamationService,private IntervService:InterventionService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"]

console.log(this.options,"options")
console.log(this.inter,"inter")


    this.getInter(this.id)

  }
  getInter(id:any){
    this.reclamationS.getIntervBy(id).subscribe(res=>{
      this.interventionid=res.id
      this.getOptions("Option",this.interventionid)
      this.getInterv("Intervention",this.interventionid)
      this.getDiag("diagnostic",this.interventionid)
    })
  }
  anti: any[] = [];
  can: any[] = [];
  sonede: any[] = [];
  bat: any[] = [];
  car: any[] = [];
  badge: any[] = [];
  autre: any[] = [];
  el: any[] = [];

  getOptions(type: any, id: any) {
    this.IntervService.gettacheByTypeId(type, id).subscribe(res => {
      if (res != null) {
        this.options = res;
        const categories = ['Anti Demarrage', 'Can', 'Sonede Temp', 'Batterie', 'Carburant', 'Badge+Lecteur', 'Autre', 'Element De Facturation'];

        // Clear the arrays before populating them again
        this.anti.length = 0;
        this.can.length = 0;
        this.sonede.length = 0;
        this.bat.length = 0;
        this.car.length = 0;
        this.badge.length = 0;
        this.autre.length = 0;
        this.el.length = 0;

        // Group the options by category
        this.options.forEach(row => {
          switch (row.categorie) {
            case 'Anti Demarrage':
              this.anti.push(row);
              console.log("demarage",this.anti)
              break;
            case 'Can':
              this.can.push(row);
              console.log("can",this.can)

              break;
            case 'Sonede Temp':
              this.sonede.push(row);
              console.log("sonede",this.sonede)

              break;
            case 'Batterie':
              this.bat.push(row);
              break;
            case 'Carburant':
              this.car.push(row);
              break;
            case 'Badge+Lecteur':
              this.badge.push(row);
              break;
            case 'Autre':
              this.autre.push(row);
              break;
            case 'Element De Facturation':
              this.el.push(row);
              break;
            default:
              break;
          }
        });
      }
    });
  }



  alimentation: any[] = [];
  gps: any[] = [];
  gsm: any[] = [];
  sim: any[] = [];
  conf: any[] = [];

  getInterv(type: any, id: any) {
    this.IntervService.gettacheByTypeId(type, id).subscribe(res => {
      if (res != null) {
        this.inter = res;
        console.log(this.inter, "zynek");

        const categories = ['Alimentation', 'GPS', 'GSM', 'SIM', 'Configuration & Mise en marche'];

        categories.forEach(category => {
          switch (category) {
            case 'Alimentation':
              this.alimentation = [];
              this.inter.forEach(row => {
                if (row.categorie === 'Alimentation') {
                  this.alimentation.push(row);
                }
              });
              console.log('alim', this.alimentation);
              break;
            case 'GPS':
              this.gps = [];
              this.inter.forEach(row => {
                if (row.categorie === 'GPS') {
                  this.gps.push(row);
                }
              });
              console.log('gps', this.gps);
              break;
            case 'GSM':
              this.gsm = [];
              this.inter.forEach(row => {
                if (row.categorie === 'GSM') {
                  this.gsm.push(row);
                }
              });
              console.log('gsm', this.gsm);
              break;
            case 'SIM':
              this.sim = [];
              this.inter.forEach(row => {
                if (row.categorie === 'SIM') {
                  this.sim.push(row);
                }
              });
              console.log('sim', this.sim);
              break;
            case 'Configuration & Mise en marche':
              this.conf = [];
              this.inter.forEach(row => {
                if (row.categorie === 'Configuration & Mise en marche') {
                  this.conf.push(row);
                }
              });
              console.log('conf', this.conf);
              break;
            default:
              break;
          }
        });
      }
    });
  }
  Diagalimentation:any[]=[]
  Diaggps: any[] = [];
  Diaggsm: any[] = [];
  Diagsim: any[] = [];
  Diagconf: any[] = [];

  getDiag(type: any, id: any) {
    this.IntervService.gettacheByTypeId(type, id).subscribe((res) => {
      if (res != null) {
        this.diagnostic = res;

        // Clear the arrays before re-populating them
        this.Diagalimentation=[]
        this.Diaggps = [];
        this.Diaggsm = [];
        this.Diagsim = [];
        this.Diagconf = [];

        // Iterate over the data and push it to the appropriate array
        for (const diag of this.diagnostic) {
          switch (diag.categorie) {
            case 'Alimentation':
              this.Diagalimentation.push(diag);
              break;
            case 'GPS':
              this.Diaggps.push(diag);
              break;
            case 'GSM':
              this.Diaggsm.push(diag);
              break;
            case 'SIM':
              this.Diagsim.push(diag);
              break;
            case 'Configuration & Mise en marche':
              this.Diagconf.push(diag);
              break;
            default:
              break;
          }
        }
      }
    });
  }


}
