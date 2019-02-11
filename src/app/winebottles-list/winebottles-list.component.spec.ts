import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinebottlesListComponent } from './winebottles-list.component';

describe('WinebottlesListComponent', () => {
  let component: WinebottlesListComponent;
  let fixture: ComponentFixture<WinebottlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinebottlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinebottlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
