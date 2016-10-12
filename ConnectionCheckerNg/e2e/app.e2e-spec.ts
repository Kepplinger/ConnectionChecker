import { ConnectionCheckerNgPage } from './app.po';

describe('connection-checker-ng App', function() {
  let page: ConnectionCheckerNgPage;

  beforeEach(() => {
    page = new ConnectionCheckerNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
