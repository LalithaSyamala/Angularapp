import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnothertestComponent } from './anothertest.component';

describe('AnothertestComponent', () => {
  let component: AnothertestComponent;
  let fixture: ComponentFixture<AnothertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnothertestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnothertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
