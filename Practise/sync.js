describe('Synchronization Demo', function(){
    it('Open non Angular website for practise', function(){
        browser.waitForAngularEnabled(false); //if the website is not angular
        browser.driver.manage().window().maximize(); //maximize browser
        browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');

        element(by.css("a[href*='loadAjax']")).click();

        //Variable to store the expected condition
        var EC = protractor.ExpectedConditions;
        
        //wait till the element (the loader) is invisible to continue
        browser.wait(EC.invisibilityOf(element(by.id('loader'))),8000);

        element(by.id('results')).getText().then(function(text){
            console.log(text);
        })
    })
})