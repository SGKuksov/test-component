import { newE2EPage } from '@stencil/core/testing';

describe('other-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<other-component></other-component>');

    const element = await page.find('other-component');
    expect(element).toHaveClass('hydrated');
  });
});
