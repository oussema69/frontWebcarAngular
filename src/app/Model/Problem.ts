export class Problem {
  categorie: string;
  autre: string;
  demande_id: number;

  constructor(categorie: string, autre: string, demande_id: number) {
  this.categorie = categorie;
  this.autre = autre;
  this.demande_id = demande_id;
  }
  }
