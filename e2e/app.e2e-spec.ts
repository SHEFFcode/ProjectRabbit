import { RabbitPage } from './app.po';

describe('rabbit App', function() {
  let page: RabbitPage;

  beforeEach(() => {
    page = new RabbitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
