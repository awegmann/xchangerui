export class XchangeruiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xchg-root h1')).getText();
  }
}
