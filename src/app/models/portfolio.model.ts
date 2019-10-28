export interface PortfolioModel {
  id: number;
  slug: string;
  nextId: number;
  prevId: number;
  image: string;
  title: string;
  category: string;
  description: string;
  client: string;
  date: string;
  environment: string;
  technology: string;
  role: string;
}
