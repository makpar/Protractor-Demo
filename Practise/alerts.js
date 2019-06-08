describe('Protractor alert steps', function(){
    it('Open Angular js website Alerts', function(){
        browser.waitForAngularEnabled(false); //if the website is not angular
        browser.get('http://qaclickacademy.com/practice.php');

        element(by.id('confirmbtn')).click();
        //Need to switch to alert because is going to be 'outside the window'
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(5000);
        });
        browser.switchTo().alert().dismiss().then(function(){
            browser.sleep(5000);
        });
    })
})