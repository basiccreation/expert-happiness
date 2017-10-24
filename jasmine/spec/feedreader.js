/* feedreader.js*/
/* This is the spec file that Jasmine will
   read and it contains all the tests that
   will be run against the application. */

/* All tests are within the $() function,
   since some of the tests require DOM
   elements.*/

$(function() {
    describe("RSS Feeds", function() {
        /* Make sure that the allFeeds
           variable has been defined and
           that it is not empty.*/
        it("are defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed in the allFeeds
           object and ensures it has a URL defined.*/

        it("has URL and is not empty", function() {
           allFeeds.forEach(function(element) {
            console.log(element.url)
            expect(element.url).toBeDefined();
           });
        });

        /* Loops through each feed in the allFeeds
           object and ensures it has a name */
        it("has name and name is not empty", function() {
           allFeeds.forEach(function(element) {
              expect(element.name).not.toBe("");
           });
        });

    }); // RSS Feeds

    describe("The menu", function() {

        /* test that menu element is hidden by default.*/

        //inspired by https://www.w3schools.com/jquery/html_hasclass.asp
        it("menu element is hidden by default", function() {
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });

        /* TODO: Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again. */

        it("menu element changes visibility when menu icon is clicked", function() {

 //           $link = $(".menu-icon-link");
 //           spyOn($link, "click");

 //           $link.click();
 //           expect($link.click).toHaveBeenCalled();

 //           expect($("body").hasClass("")).not.toBeTruthy();
        });
    }); //end The menu

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {

        /* TODO: Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test will require the use of Jasmine's beforeEach and asynchronous done() function.*/

 //       beforeEach(function(done) {
  //          loadFeed(0, done);
 //       });

        it("loadFeed is called and completes and there is at least one element", function(/*done*/) {
//            var oneEntryMinimum = $(".feed .entry").length;
 //           expect(oneEntryMinimum).toBeGreaterThan(0);
 //           done();
        });
    }); // end Initial Entries

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {

 //       var orgLength = $(".feed .entry").length;

 //       beforeEach(function(done) {
 //           allFeeds.unshift({ name: "TekThing", url: "http://feeds.feedburner.com/Tekthing" });
//            loadFeed(0, done);
//        });

        /* TODO: Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.*/

        it("Content changes when new feed is added", function() {
//            var currentLength = $(".feed .entry").length;

 //           expect(allFeeds[0].name).toEqual("TekThing");
 //           expect(currentLength).not.toEqual(orgLength);
        });
    });

}());

