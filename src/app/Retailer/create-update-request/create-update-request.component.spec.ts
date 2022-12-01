import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateRequestComponent } from './create-update-request.component';

describe('CreateUpdateRequestComponent', () => {
  let component: CreateUpdateRequestComponent;
  let fixture: ComponentFixture<CreateUpdateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
