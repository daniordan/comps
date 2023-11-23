import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  // use Input decorator to communicate between parent - child components to pass data, headers and classes (use Alias for this one) to the table child component
  @Input('class') classNames = '';

  @Input() data: any[] = [];
  @Input() headers: any[] = [];
}
