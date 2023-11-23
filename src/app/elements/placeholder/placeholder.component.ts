// Import Input decorator needed to communicate between parent - child components
import { Component, Input } from '@angular/core';
import { EndOfLineState } from 'typescript';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {
  // Use Input decorator to communicate between parent - child components
  //  Add new properties that are going to be set by the parent component
  // These properties will be used to customize the Placeholder component and as Input properties in the html template of the parent component (in elements-home.component.html) and manipulate them by using property binding syntax

  // By default, we will show the header of the placeholder component
  // By default, we will show 3 lines in the placeholder component
  @Input() header = true;
  @Input() lines = 3;
}
