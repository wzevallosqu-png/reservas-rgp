import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectMenuPage } from './select-menu.page';

describe('SelectMenuPage', () => {
  let component: SelectMenuPage;
  let fixture: ComponentFixture<SelectMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
