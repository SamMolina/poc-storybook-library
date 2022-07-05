import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocStorybookLibraryComponent } from './poc-storybook-library.component';

describe('PocStorybookLibraryComponent', () => {
  let component: PocStorybookLibraryComponent;
  let fixture: ComponentFixture<PocStorybookLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocStorybookLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocStorybookLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
