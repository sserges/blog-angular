import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {
      title: 'Mon Premier Article',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon Deuxième Article',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon Troisième Article',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      loveIts: 0,
      createdAt: new Date()
    }
  ];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  constructor() { }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
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
    this.emitPosts();
  }
}
