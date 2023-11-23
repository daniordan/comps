import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // Implement Lazy Loading
  // This code snippet is defining a route in an Angular application. The path property specifies the URL path that the route will match, in this case, '/elements'.
  // The loadChildren property is used to dynamically load a module when the route is accessed. It takes a function that returns a promise. In this case, the function uses the import() function to asynchronously import the 'elements.module' file.
  // When the import is successful, the promise is resolved, and the then() method is called with a callback function. The callback function receives the imported module as an argument (m), and it returns the ElementsModule from the imported module.
  // By using this approach, the 'ElementsModule' is only loaded when the '/elements' route is accessed, improving the initial loading performance of the application.
  //  This code snippet is using dynamic import to asynchronously load the ElementsModule from the ./elements/elements.module file. It is using the loadChildren property to specify that the module should be loaded lazily, meaning it will only be loaded when it is needed.
  // The => is an arrow function syntax in JavaScript. It is used to create anonymous functions. In the code snippet you provided, it is used to define a function that returns the result of the import statement.
  // In the code snippet you provided, it is used to define a function that returns the result of the import statement.
  // Whenever a user goes to the route 'elements', it will render/ show the content of ElementsHomeComponent component on the screen
  // Whenever a user goes to the route 'elements', the loadChildren method will be invoked and Angular is going to take a look at the contains of the import function (which is replacing the import { ElementsModule } from './elements/elements.module' statement from app.module.ts file), sees that we are trying to import that file dinamically (dinamically = only when we need it) and after we retreive that file (elements.module) we are chaining on a "then" statement and return the actual elements module from that file (then((m) => m.ElementsModule)
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then((m) => m.ViewsModule),
  },
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then((m) => m.ModsModule),
  },
  // route rule for home component/home page (empty string as route rule for localhost:4200)
  { path: '', component: HomeComponent },
  // route rule for not found page, ** wild card means that in case of not finding any user route, show not found page component content
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
