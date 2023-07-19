import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingEventAttributeComponent } from './binding-event-attribute/binding-event-attribute.component';
import { FormsModule } from '@angular/forms';
import { CustomPropertyBindingChildComponent } from './custom-property-binding-child/custom-property-binding-child.component';
import { CustomPropertyBindingParentComponent } from './custom-property-binding-parent/custom-property-binding-parent.component';
import { StructuralDirective } from './structural.directive';
import { AttributeDirective } from './attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    BindingEventAttributeComponent,
    CustomPropertyBindingChildComponent,
    CustomPropertyBindingParentComponent,
    StructuralDirective,
    AttributeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
