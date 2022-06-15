import { newSpecPage } from '@stencil/core/testing';
import { DataGrid } from '../other-component';

describe('other-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DataGrid],
      html: `<other-component></other-component>`,
    });
    expect(page.root).toEqualHtml(`
      <other-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </other-component>
    `);
  });
});
