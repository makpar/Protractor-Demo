describe('Protractor frames demo', function(){
    it('Frames', function(){
        browser.waitForAngularEnabled(false); //if the website is not angular
        browser.driver.manage().window().maximize(); //maximize browser
        browser.get('http://qaclickacademy.com/practice.php');

        browser.switchTo().frame('courses-iframe'); //Need to switch to frame to be able to locate elements inside it
        element(by.css("a[href*='sign_in']")).getText().then(function(text){
            console.log(text);
        })
    })
})