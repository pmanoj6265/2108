import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStackComponent } from './open-stack.component';

describe('OpenStackComponent', () => {
  let component: OpenStackComponent;
  let fixture: ComponentFixture<OpenStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
