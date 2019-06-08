describe('Protractor practise', function(){
    function selectItems(product){
        element.all(by.tagName('app-card')).each(function(item){
            item.element(by.css("h4 a")).getText().then(function(text){
                if (text == product){
                    item.element(by.css("button[class*='btn-info']")).click();//click on add button
                }
            })
        })
    }

    it('Form validation', function(){
        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name('name')).sendKeys('Mystudents');
        element(by.css("input[name='email']")).sendKeys('mystudents@gmail.com');
        element(by.id('exampleInputPassword1')).sendKeys('password2');

        //Checkbox
        element(by.css("input[type='checkbox']")).click();

        //Select option
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", 'Female')).click();

        //Select first radio button
        element.all(by.name('inlineRadioOptions')).first().click();

        //Locator for button text
        element(by.buttonText('Submit')).click().then(function(){
            element(by.css("div[class*='success']")).getText().then(function(text){
                console.log(text);
            })
        })

        //Negative testing
        element(by.name('name')).clear();
        element(by.name('name')).sendKeys('M').then(function(){
            element(by.css("div[class='alert alert-danger']")).getText().then(function(text){
                console.log(text);
            })
        });

        //Select by link
        element(by.linkText('Shop')).click();

        selectItems('Samsung Note 8');
        selectItems('iphone X');

        element(by.partialLinkText('Checkout')).getText().then(function(text){
            console.log(text); // Checkout ( 2 )
            var res = text.split('('); // res[0]=Checkout ( res[1]= 2 )
            //Just js string manipulation
            var x = Number(res[1].trim().charAt(0)); //2
            var y = x+1; //3
            ///
            expect(res[1].trim().charAt(0)).toBe('2')
        });

        element(by.partialLinkText('Checkout')).click().then(function(){
            element.all(by.tagName('tbody')).each(function(item){
                item.element(by.css("td[class*='text-center']")).getText().then(function(text){
                    var res = text.split('.');
                    var x = Number(res[1].trim());
                    console.log(x);
                    //sum all totals
                    //sum should be equal to big total
                })
            })
        });

        //Get count number items
        //click on remove button and that count is reducing
    })
})