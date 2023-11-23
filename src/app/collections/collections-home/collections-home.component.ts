import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  // example how to use a class property with routerLink to construct the route URL
  // partOfLink = 'hi';

  // we will have an array of objects key:value like dicts
  // each object will represent one row of data for our table
  // we can use ngFor directive to iterate the table and construct it
  // attention: JavaScript or Typescript do not guarantee the order of the keys inside of an object
  // we need a second data structure for this to tell our component about the different columns that it needs to show and the information or the labl to show inside of each of these headers as well
  // we will create a Table Component and pass in two separate pieces of information: data (each row inside our table) and headers (a key - label mapping with the key order)
  // then pass data and headers inside the parent component html template into the table component html template (child component) using property binding syntax inside of our template

  // add arrays of objects to construct the table
  data = [
    { name: 'James McJoe', age: 30, job: 'Designer', employed: true },
    { name: 'Jill Jilly', age: 24, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 32, job: 'Engineer', employed: true },
  ];

  // headers configuration array for the table
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' },
  ];
}
