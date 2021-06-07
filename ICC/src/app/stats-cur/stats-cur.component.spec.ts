import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCurComponent } from './stats-cur.component';

describe('StatsCurComponent', () => {
  let component: StatsCurComponent;
  let fixture: ComponentFixture<StatsCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsCurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
