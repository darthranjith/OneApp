import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BlogPostRawModel} from '../models/raw/blog.post.raw.model';
import {BlogCategoryRawModel} from '../models/raw/blog.category.raw.model';
import {BlogFeaturedImageRawModel} from '../models/raw/blog.featuredimage.raw.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<BlogPostRawModel[]> {
    const url = 'https://blog.varanjith.com/wp-json/wp/v2/posts';
    return this.http.get<BlogPostRawModel[]>(url);
  }

  getCategories(): Observable<BlogCategoryRawModel[]> {
    const url = 'https://blog.varanjith.com/wp-json/wp/v2/categories';
    return this.http.get<BlogCategoryRawModel[]>(url);
  }

  getFeaturedImages(): Observable<BlogFeaturedImageRawModel[]> {
    const url = 'https://blog.varanjith.com/wp-json/wp/v2/media';
    return this.http.get<BlogFeaturedImageRawModel[]>(url);
  }
}
