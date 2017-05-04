import { Csc131ProjectDirectoryPage } from './app.po';

describe('csc131-project-directory App', function() {
  let page: Csc131ProjectDirectoryPage;

  beforeEach(() => {
    page = new Csc131ProjectDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
