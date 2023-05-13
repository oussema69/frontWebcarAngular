export class User {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  tel: string;
  role: string;
  id:string;

  constructor(nom: string='', prenom: string='', email: string='', password: string='', tel: string='', role: string='',id:string='') {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.tel = tel;
    this.role = role;
    this.id=id
  }
}
