import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeJuComponent } from './swipe-ju.component';

describe('SwipeJuComponent', () => {
  let component: SwipeJuComponent;
  let fixture: ComponentFixture<SwipeJuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeJuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeJuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
