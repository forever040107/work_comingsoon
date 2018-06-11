import { Coming02Page } from './app.po';

describe('coming02 App', function() {
  let page: Coming02Page;

  beforeEach(() => {
    page = new Coming02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
