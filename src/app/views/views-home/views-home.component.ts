import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  stats = [
    { value: 22, label: 'Favorites' },
    { value: 967, label: 'Page Views' },
    { value: 30, label: 'Users' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description:
        'This is a great couch, the kind that you would want in your house!',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description:
        'This is a great dresser, the kind that you would want in your house!',
    },
  ];
}
