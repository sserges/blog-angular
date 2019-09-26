import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      content: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value.trim();
    const content = this.postForm.get('content').value.trim();
    if (title === '' || content === '') {
      alert('Formulaire invalide');
    } else {
      // console.log(title, content);
      const newPost = new Post(title, content, 0, new Date());
      this.postsService.createNewPost(newPost);
      this.router.navigate(['/posts']);
    }
  }

}
