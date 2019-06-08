describe('Protractor Object Demo', function(){
    var obj = require('./class.js');
    var d = require('./data.js');
    var using = require('jasmine-data-provider');

    beforeEach(function(){
        obj.getUrl();
    });

    using(d.Datadriven, function(data, description){ //data = data inside sub-objects, description = name of sub-object
        it('Testing calculator functionality - '+description, function(){ 
            obj.firstInput.sendKeys(data.firstInput);
            obj.secondInput.sendKeys(data.secondInput);
            obj.goButton.click();
    
            obj.result.getText().then(function(text){
                console.log(text);
            });
    
            expect(obj.result.getText()).toBe(data.result);
        })
    });

    afterEach(function(){
        console.log('Test is completed');
    });
})
