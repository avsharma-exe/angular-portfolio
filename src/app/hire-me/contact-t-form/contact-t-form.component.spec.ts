import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTFormComponent } from './contact-t-form.component';

describe('ContactTFormComponent', () => {
  let component: ContactTFormComponent;
  let fixture: ComponentFixture<ContactTFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactTFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
