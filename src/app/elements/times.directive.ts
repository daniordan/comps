// Import TemplateRef, ViewContainerRef, Input needed for the custom directive
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
// create custom directive to configure the number of lines shown in the placeholder component
export class TimesDirective {
  constructor(
    private ViewContainer: ViewContainerRef,
    private TemplateRef: TemplateRef<any>
  ) {}

  // add alias to be used in the html template
  // this is similar to the render in Django when using context dictionaries to display context content in html template directly in the html
  @Input('appTimes') set render(times: number) {
    this.ViewContainer.clear();

    for (let i = 0; i < times; i++) {
      // empty object "{}" serves as context for the TemplateRef (template)
      this.ViewContainer.createEmbeddedView(this.TemplateRef, {});
    }
  }
}
