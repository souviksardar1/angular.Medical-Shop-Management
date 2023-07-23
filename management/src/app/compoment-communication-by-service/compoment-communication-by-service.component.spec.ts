import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompomentCommunicationByServiceComponent } from './compoment-communication-by-service.component';

describe('CompomentCommunicationByServiceComponent', () => {
  let component: CompomentCommunicationByServiceComponent;
  let fixture: ComponentFixture<CompomentCommunicationByServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompomentCommunicationByServiceComponent]
    });
    fixture = TestBed.createComponent(CompomentCommunicationByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
