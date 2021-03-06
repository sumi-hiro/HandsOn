import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueUpdateComponent } from './issue-update.component';

describe('IssueUpdateComponent', () => {
  let component: IssueUpdateComponent;
  let fixture: ComponentFixture<IssueUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
