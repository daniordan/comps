import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// add SharedModule import to use it in this module
import { SharedModule } from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, SegmentComponent],
  // add SharedModule import to use it in this module
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
  // add the component to the list of exports to export the component for other modules to use it
  // using routing we won't need to export component here (we won't import it in app module anymore), the content will be shown on specific route
  // exports: [ElementsHomeComponent],
  exports: [],
})
export class ElementsModule {}
