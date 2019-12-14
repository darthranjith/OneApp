import {Moment} from 'moment';

export interface BlogPostModel {
  id: number;
  date: Moment;
  title: string;
  featured_media: string;
  categories: string[];
}
