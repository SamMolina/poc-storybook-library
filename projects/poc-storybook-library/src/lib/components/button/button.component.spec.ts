import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingSystemButton } from './button.component';

describe('ButtonComponent', () => {
  let component: DesingSystemButton;
  let fixture: ComponentFixture<DesingSystemButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesingSystemButton ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesingSystemButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
