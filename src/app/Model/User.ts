export class User {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  tel: string;
  role: string;

  constructor(nom: string, prenom: string, email: string, password: string, tel: string, role: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.tel = tel;
    this.role = role;
  }
}
