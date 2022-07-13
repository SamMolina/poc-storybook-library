import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class DesingSystemButton implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * This is just a custom comment c:
   * here, an emoji 🥳
   */
  @Input()
  disabled = false;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    
    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}



