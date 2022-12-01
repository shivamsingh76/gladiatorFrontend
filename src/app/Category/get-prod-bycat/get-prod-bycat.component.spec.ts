import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProdBycatComponent } from './get-prod-bycat.component';

describe('GetProdBycatComponent', () => {
  let component: GetProdBycatComponent;
  let fixture: ComponentFixture<GetProdBycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProdBycatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProdBycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
