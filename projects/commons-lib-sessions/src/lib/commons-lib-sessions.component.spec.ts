import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsLibSessionsComponent } from './commons-lib-sessions.component';

describe('CommonsLibSessionsComponent', () => {
  let component: CommonsLibSessionsComponent;
  let fixture: ComponentFixture<CommonsLibSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonsLibSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsLibSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
