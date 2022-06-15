import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'data-grid',
  styleUrl: 'data-grid.css',
  shadow: true,
})
export class DataGrid {

  render() {
    return (
      <Host>
        <div>dfgkjdf;kjlfdj;gdgjfdj;</div>

        <slot></slot>
      </Host>
    );
  }

}
