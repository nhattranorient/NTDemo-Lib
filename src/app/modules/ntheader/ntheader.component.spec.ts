import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTHeaderComponent } from './ntheader.component';

describe('NTHeaderComponent', () => {
  let component: NTHeaderComponent;
  let fixture: ComponentFixture<NTHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
