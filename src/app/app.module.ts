import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import elements module to use elements home component in app module
// we comment this ElementsModule import / delete it to implement Lazy Loading feature
// import { ElementsModule } from './elements/elements.module';
// import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// here we customize how this module behaves using the module property definitions
@NgModule({
  // List of components, pipes, directives that are created in this module
  // Updated automatically whenever you generate a new component
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  // List of other modules that this module depends upon
  // add elements module to the list of imports to import elements module to use elements home component in app module
  // reach out to the elements module, get access to all the components that have been exported from it and give us access to them inside the app module
  // AppRoutingModule should be the last import to fix the issue with home/landing and not found routing
  // we delete the ElementsModule from importslist to implement Lazy Loading feature
  // imports: [BrowserModule, ElementsModule, CollectionsModule, AppRoutingModule],
  imports: [BrowserModule, AppRoutingModule],
  // List of components, pipes, directives that this module makes available to other modules
  // Whenever we import one module into another, we only get access to the things that are listed as exports
  exports: [],
  // Old way of connecting modules and services
  // Depricated way of connecting modules and services together
  providers: [],
  // Used by the AppModule only to declare what component will be displayed first
  // The component which will be first rendered onto the screen when our application first starts up
  bootstrap: [AppComponent],
})
export class AppModule {}
