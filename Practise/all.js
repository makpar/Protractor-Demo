describe('All and each demo', function(){
    function add(a,b){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }
    it('All', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        add(3,5);
        add(2,5);
        add(1,5);
    
        element.all(by.repeater('result in memory')).count().then(function(text){
            console.log(text);
        })

        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
            });
        })
    }) 
})