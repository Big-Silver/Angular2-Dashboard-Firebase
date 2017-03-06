import { Angular2FirebasePage } from './app.po';

describe('angular2-firebase App', function() {
  let page: Angular2FirebasePage;

  beforeEach(() => {
    page = new Angular2FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
