import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BlogComponents';
  posts: Post[] = [
    {
      title: 'Вивчаю компоненти',
      text: 'Створюю проект "Блог"',
      id: 1,
    },
    {
      title: 'Вивчаю директиви',
      text: 'Все ще створюю "Блог"',
      id: 2,
    },
  ];
  search = ""

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  deletePost(post: Post) {
    var index = this.posts.indexOf(post);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
