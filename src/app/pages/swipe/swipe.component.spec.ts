import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeComponent } from './swipe.component';

describe('SwipeJuComponent', () => {
  let component: SwipeComponent;
  let fixture: ComponentFixture<SwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
