describe("Protractor baby steps", function() {
    it("Open Angular js website", function(){
   	 //write raw Protractor code
        browser.get("https://angularjs.org"); //default Chrome
        
        browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
            console.log('I am the last step to execute');
        })
        browser.sleep(10000); //wait for 10 seconds

        
    })
    
    it("Close the browser", function(){
   	 
    })
})
