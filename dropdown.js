describe('Dropdowns', function(){
    function calc(a,b,c){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(values){
                if(values == c){
                    item.click();
                }
            })
        })

        element(by.id('gobutton')).click();
    }
    it('All', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        calc(3,5,'MULTIPLICATION');
        calc(2,5,'DIVISION');
        calc(1,5,'ADDITION');

        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
            });
        })
    }) 
})