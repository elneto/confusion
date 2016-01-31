'use strict';

describe('conFusion App E2E Testing', function() {

	it('should automatically redirect to / when location hash/fragment is empty', function() {

    browser.get('index.html');
    //browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/");

    /*element(by.name('q')).sendKeys('hola google');
    expect(by.id('sbfrm_l')).toEqual("About 18,000,000 results (0.54 seconds)");*/

  });

  describe('index', function() {
    beforeEach(function() {
      browser.get('index.html#/');
      //browser.get('analytics/');
    });

    it('should have a title', function() {
      expect(browser.getTitle()).
        toEqual('Ristorante Con Fusion');
        //toEqual('Google Analytics - Mobile, Premium and Free Website Analytics – Google');
    });
  });

  describe('menu 0 item', function() {
    beforeEach(function() {
      browser.get('index.html#/menu/0');
    });

    it('should have a name', function() {
          var name = element(by.binding('dish.name'));
          expect(name.getText()).
             toEqual('Uthapizza Hot $4.99');
    });

    it('should show the number of comments as', function() {
         expect(element.all(by.repeater('com in dish.comments'))
            .count()).toEqual(8);

    });

    it('should show the first comment author as', function() {
          element(by.model('confusion.sor')).sendKeys('author');
            expect(element.all(by.repeater('com in dish.comments'))
            .count()).toEqual(8);
          var author = element.all(by.repeater('com in dish.comments'))
                      .first().element(by.binding('com.author'));

          expect(author.getText()).toContain('25 Cent');

    }); 
 });  

});