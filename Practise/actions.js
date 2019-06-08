describe('Actions demo', function(){
    it('Open Posse website', function(){
        browser.get('http://posse.com/');

        element(by.model('userInputQuery')).sendKeys('river');
        browser.actions().mouseMove(element(by.model('locationQuery')).sendKeys('London')).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
            expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
            element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(1).click();
            element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
                browser.getAllWindowHandles().then(function(handles){ //will get all open tabs
                    browser.switchTo().window(handles[1]); //switch to child window
                    browser.getTitle().then(function(title){ //to test if tab has been changed
                        console.log(title);
                    })
                })
            });
        });
    })
})