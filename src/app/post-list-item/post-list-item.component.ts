import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  handleLoveIts() {
    this.post.loveIts++;
    this.postsService.savePosts();
  }

  handleDontLoveIts() {
    this.post.loveIts--;
    this.postsService.savePosts();
  }

  onDeletePost(post: Post) {
    if (confirm('Voulez-vous vraiment supprimer ce post?')) {
      this.postsService.removePost(post);
    }
  }


}
