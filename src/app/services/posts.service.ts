import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    database().ref('/posts').set(this.posts);
  }

  getPosts() {
    database().ref('/posts').on('value', (data: database.DataSnapshot) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  constructor() { }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );

    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
