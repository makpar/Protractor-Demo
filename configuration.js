var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  //  seleniumAddress: 'http://localhost:4444/wd/hub', //address for the Selenium Server
    specs: ['jsObject.js'], //here go all the specs to run
    capabilities: {
          browserName: 'chrome',
          // browserName: 'firefox',
          // browserName: 'internet explorer'
          chromeOptions: {
            args: ['--no-sandbox'] //fix a problem opening Chrome
          },
    },

    suites: {
      smoke: ['chainLocators.js', 'dropdown.js'],
      regression: 'jsObject.js'
    },

    onPrepare: function() {
      browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots',
          takeScreenshots: true,
          takeScreenshotsOnlyOnFailures: true
        })
      );
      //If a project is a non Angular
      //browser.waitForAngularEnabled(false); 
      //Consider a test for reporting
    },

    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };
  