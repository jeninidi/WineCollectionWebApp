import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialmoduleTestComponent } from './materialmodule-test.component';

describe('MaterialmoduleTestComponent', () => {
  let component: MaterialmoduleTestComponent;
  let fixture: ComponentFixture<MaterialmoduleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialmoduleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialmoduleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
