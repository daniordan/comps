import {
  Component,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  // This code snippet is written in TypeScript and defines a property called "close" with the @Output() decorator. It creates a new instance of the EventEmitter class and assigns it to the "close" property. The EventEmitter class is commonly used in Angular to emit events from a component to its parent or other components (parent -> child communication).
  @Output() close = new EventEmitter();

  // use dependency injection in the constructor to get access to a class that we've used very briefly a little bit before (ElementRef class) - this will give us access to the host element of our component
  // we will take this host element and append it to the body of the entire document
  // This code snippet is using dependency injection in the constructor to access the ElementRef class. The ElementRef class provides access to the host element of the component. The code then appends this host element to the body of the entire document. The commented out line is for debugging purposes.
  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement);  // used just for debugging
  }

  // this function will be called when the component is initialized by Angular
  // it uses the dependency injection provided by ElementRef class to access the host element of this component object
  // and then finds and stores the app-modal element as a child of the body element
  // This code snippet is from an Angular component and it defines the ngOnInit() method. This method is called when the component is initialized.
  // In this specific code snippet, the ngOnInit() method adds the app-modal element as a child of the body element. The el.nativeElement property refers to the current component's native element.
  // The method doesn't take any parameters and doesn't return a value.

  // ngInit() is a method that we refer to as a lifecycle hook.
  // lifecycle hook can be optionally defined on all of our different components that we create
  // if we define it specifically ngOnInit then Angular will automatically call this function for us at some very specific point in time (when the component is initialized)
  // there are several other lifecycle hooks: ngOnInit, ngOnDestroy, ngOnChanges, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked
  // inside of ngOnInit() we can get access to data that has been provided from a parent component but we cannot access that data anywhere inside of our component before NG on init gets called
  // e.g. let's say we have a property "items" defined in a class component, we won't be able to access it in our component before NG on init gets called (try to add some console log to print "items" inside constructor() and then inside ngOnInit() - you will see the data/content of "items" only when accessing it inside ngOnInit(), same goes for ngOnChanges() for example)
  // implements OnInit - OnInit is an interface and technically Interfaces are optional - works without but just signals / highlights / warning error that you need to add ngOnInit() method

  /**
   * Initializes the component and adds the app-modal element as a child of the body element.
   *
   * This function does not take any parameters.
   *
   * @return {void} This function does not return a value.
   */
  ngOnInit() {
    // app-modal is now a child of the body element
    document.body.appendChild(this.el.nativeElement);
  }

  // This code snippet is from an Angular component and it is implementing the ngOnDestroy() lifecycle hook. This hook is called when the component is being destroyed. In this particular code, it is removing the element from the DOM by calling the remove() method on the nativeElement of the component.

  /**
   * Destroys the component and removes it from the DOM.
   *
   * This function is called when the component is being destroyed. It removes the element from the DOM by calling the `remove` method on the `nativeElement` property of the component's instance.
   *
   * No parameters are required for this function.
   *
   * This function does not return any value.
   */
  ngOnDestroy() {
    // console.log('LEAVING MODAL!!!'); // used just for debugging
    // remove element from the DOM - in this case remove the app-modal element
    this.el.nativeElement.remove();
  }

  // This code defines a method called onCloseClick that emits a close event.
  onCloseClick() {
    this.close.emit();
  }
}
