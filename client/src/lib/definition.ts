export type ArticleType = {
  id: number;
  nom: string;
  description: string;
  imageUrl?: string;
  categorie: string;
  disponibilite: boolean;
  localisation: string;
};
