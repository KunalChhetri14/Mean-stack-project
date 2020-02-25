import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSideTopicComponent } from './course-side-topic.component';

describe('CourseSideTopicComponent', () => {
  let component: CourseSideTopicComponent;
  let fixture: ComponentFixture<CourseSideTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSideTopicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSideTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
