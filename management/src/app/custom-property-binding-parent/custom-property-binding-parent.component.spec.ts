import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertyBindingParentComponent } from './custom-property-binding-parent.component';

describe('CustomPropertyBindingParentComponent', () => {
  let component: CustomPropertyBindingParentComponent;
  let fixture: ComponentFixture<CustomPropertyBindingParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPropertyBindingParentComponent]
    });
    fixture = TestBed.createComponent(CustomPropertyBindingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
