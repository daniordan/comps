import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule],
  // export DividerComponent so that it can be used in other modules
  exports: [DividerComponent],
})
export class SharedModule {}
