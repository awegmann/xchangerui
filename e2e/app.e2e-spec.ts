import { XchangeruiPage } from './app.po';

describe('xchangerui App', function() {
  let page: XchangeruiPage;

  beforeEach(() => {
    page = new XchangeruiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('xchg works!');
  });
});
