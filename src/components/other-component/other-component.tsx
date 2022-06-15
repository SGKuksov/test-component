import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'other-component',
  styleUrl: 'other-component.css',
  shadow: true,
})
export class OtherComponent {

  render() {
    return (
      <Host>
        <div>dfgkjdf;kjlfdj;gdgjfdj;</div>

        <slot></slot>
      </Host>
    );
  }

}
