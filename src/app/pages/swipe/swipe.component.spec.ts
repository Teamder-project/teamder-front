import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
<<<<<<< HEAD:src/app/pages/swipe/swipe.component.spec.ts
=======
>>>>>>> 0d5a1dec770681366d057f639e17100aec621552
import { SwipeComponent } from './swipe.component';

describe('SwipeComponent', () => {
  let component: SwipeComponent;
  let fixture: ComponentFixture<SwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeComponent ]
<<<<<<< HEAD
=======
import { FriendsComponent } from './friends.component';

describe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsComponent ]
>>>>>>> 0d5a1dec770681366d057f639e17100aec621552:src/app/_components/friends/friends.component.spec.ts
=======
>>>>>>> 0d5a1dec770681366d057f639e17100aec621552
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:src/app/pages/swipe/swipe.component.spec.ts
    fixture = TestBed.createComponent(SwipeComponent);
=======
    fixture = TestBed.createComponent(FriendsComponent);
>>>>>>> 0d5a1dec770681366d057f639e17100aec621552:src/app/_components/friends/friends.component.spec.ts
=======
    fixture = TestBed.createComponent(SwipeComponent);
>>>>>>> 0d5a1dec770681366d057f639e17100aec621552
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
