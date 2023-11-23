import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import the component we want to display using routing on route rule created
import { ElementsHomeComponent } from './elements-home/elements-home.component';

// Create object in Routes config to add route rule for component - the route where to render the content of ElementsHomeComponent
// Anytime a user goes to the route 'elements', it will render/ show the content of ElementsHomeComponent component on the screen
// App Module is importing the Elements Module and automatically is going to load up all these different routing rules that we have defined without directly referencing the ElementHomeComponent
// fix the cumulative path issue duplication "elements/elements" for implementing Lazy Loading - so, we need to remove 'elements' from path and leave it as empty string
// In your lazy loaded module's Routing file, edit the 'path' of each route to be relative to the path you specified in the 'AppRoutingModule'
// const routes: Routes = [{ path: 'elements', component: ElementsHomeComponent }];
const routes: Routes = [{ path: '', component: ElementsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
