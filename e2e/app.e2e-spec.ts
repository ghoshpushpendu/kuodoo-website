import { KuoodonewPage } from './app.po';

describe('kuoodonew App', () => {
  let page: KuoodonewPage;

  beforeEach(() => {
    page = new KuoodonewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
