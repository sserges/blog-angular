import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
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
}
