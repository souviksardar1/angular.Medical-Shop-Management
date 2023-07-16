import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertyBindingChildComponent } from './custom-property-binding-child.component';

describe('CustomPropertyBindingChildComponent', () => {
  let component: CustomPropertyBindingChildComponent;
  let fixture: ComponentFixture<CustomPropertyBindingChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPropertyBindingChildComponent]
    });
    fixture = TestBed.createComponent(CustomPropertyBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
