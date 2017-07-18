import { PmProjectPage } from './app.po';

describe('pm-project App', () => {
  let page: PmProjectPage;

  beforeEach(() => {
    page = new PmProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
