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
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe("");

            });
        });

        /* Loops through each feed in the allFeeds
           object and ensures it has a name */
        it("has name and name is not empty", function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined();
                expect(element.name).not.toBe("");
            });
        });

    }); // RSS Feeds

    describe("The menu", function() {

        /* test menu element is hidden by default.*/

        //inspired by https://www.w3schools.com/jquery/html_hasclass.asp
        it("menu element is hidden by default", function() {
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });

        /* test that menu changes visibility when
           menu icon is clicked.
           - menu displays when clicked and
           - menu hides when clicked again. */

        it("menu element changes visibility when menu icon is clicked", function() {
            //inspired by: https://stackoverflow.com/questions/10823790/testing-a-click-event-with-jasmine-that-appends-a-style-sheet-to-the-head
            $(".menu-icon-link").trigger("click");
            expect($("body").hasClass("menu-hidden")).toBeFalsy();

            $(".menu-icon-link").trigger("click");
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });
    }); //end The menu

    describe("Initial Entries", function() {

        /* test that loadFeed function is called,
           completes its work, and there is at
           least a single element within the container. */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it("loadFeed is called and completes and there is at least one element", function(done) {
            var oneEntryMinimum = $(".feed .entry").length;
            expect(oneEntryMinimum).toBeGreaterThan(0);
            done();
            //  this stays, otherwise I get the error      //
            //  'Expected 0 to be greater than 0.' Because //
            //  there's no feeds to count.                 //
        });
    }); // end Initial Entries



    describe("New Feed Selection", function() {
        /* Test that when a new feed is loaded
           by the loadFeed function
           that the content actually changes. */
        var firstFeed,
            secondFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = ($(".feed").html());
                done();
                // console.log(firstFeed);
                // console.log("---------------------------------------");
            });
        });

        it("Content changes when new feed is added", function(done) {
            loadFeed(1, function() {
                secondFeed = ($(".feed").html());
                done();
                // console.log(secondFeed);
            });
            expect(firstFeed).not.toBe(secondFeed);
        }); //end it

    }); //end new feed selection

}());