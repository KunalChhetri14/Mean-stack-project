import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatPostComponent } from './admin-creat-post.component';

describe('AdminCreatPostComponent', () => {
  let component: AdminCreatPostComponent;
  let fixture: ComponentFixture<AdminCreatPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreatPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
