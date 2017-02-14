import { HenAppPage } from './app.po';

describe('hen-app App', function() {
  let page: HenAppPage;

  beforeEach(() => {
    page = new HenAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
