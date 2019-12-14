import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {map, take} from 'rxjs/operators';
import {forkJoin, Subscription} from 'rxjs';
import * as _ from 'lodash';
import * as moment from 'moment';
import {BlogPostRawModel} from '../../models/raw/blog.post.raw.model';
import {BlogPostModel} from '../../models/blog.post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  blogPosts: BlogPostModel[];
  private subscription$: Subscription;
  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    const categories$ = this.blogService.getCategories();
    const posts$ = this.blogService.getPosts();
    const featuredImages$ = this.blogService.getFeaturedImages();
    this.subscription$ = forkJoin([
      categories$,
      posts$,
      featuredImages$
    ]).pipe(
      map(([categories, posts, featuredImages]) => {
        return posts.map(post => {
          const categoryNames = [];
          post.categories.map(categoryId => {
            categoryNames.push(_.find(categories, (category) => category.id === categoryId).name);
          });
          post.featured_media = _.find(featuredImages,
            (featuredImage) => featuredImage.id === post.featured_media).media_details.sizes.medium.source_url;
          post.categories = categoryNames;
          return post;
        });
      }),
      map(posts => {
        return posts
          .map((post: BlogPostRawModel) => {
            return {
              id : post.id,
              categories: post.categories.map((categories) => categories.toString()),
              date: moment(post.date),
              featured_media: post.featured_media,
              title: post.title.rendered,
              slug: post.slug
            } as BlogPostModel;
          });
      }),
      take(6)
    ).subscribe(posts => this.blogPosts = posts);
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
