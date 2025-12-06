import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagaenotfoundComponent } from './pagaenotfound.component';

describe('PagaenotfoundComponent', () => {
  let component: PagaenotfoundComponent;
  let fixture: ComponentFixture<PagaenotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagaenotfoundComponent]
    });
    fixture = TestBed.createComponent(PagaenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
