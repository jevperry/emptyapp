import { Md2Page } from './app.po';

describe('md2 App', function() {
  let page: Md2Page;

  beforeEach(() => {
    page = new Md2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
