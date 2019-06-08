describe('Protractor Element Demo', function(){
    it('Locators', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        //enter a 3 to a specific field box
        element(by.model('first')).sendKeys('3');

        //enter a 5 to a specific field box
        element(by.model('second')).sendKeys('5');

        element(by.id('gobutton')).click();

        //The argument "text" is what getText returns
        //Need to be catched first because of the asynchronous problem of JavaScript
        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log(text);
        });

        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

        // browser.waitForAngularEnabled(false);
        // browser.get('http://google.com');
    })
})
