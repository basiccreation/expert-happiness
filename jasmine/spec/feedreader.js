/* feedreader.js
 *
 * This is the spec file that Jasmine will read and containsb all of the tests that will be run against your application. */

/* We're placing all of our tests within the $() function, since some of these tests may require DOM elements. We want to ensure they don't run until the DOM is ready. */
$(function() {
    /* This is our first test suite - a test suite just contains a related set of tests. This suite is all about the RSS feeds definitions, the allFeeds variable in our application. */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the allFeeds variable has been defined and that it is not empty. Experiment with this before you get started on  the rest of this project. What happens when you change allFeeds in app.js to be an empty array and refresh the page?*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.*/

        //inspired by https://stackoverflow.com/questions/26172435/jasmine-use-expect-within-loops
        it('has URL and is not empty', function() {
            var i = 0;
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[i][1]).not.toBe("");
            }
        });

        /* TODO: Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.  */
        it('has name and name is not empty', function() {
            var i = 0;
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[i][0]).not.toBe("");
            }
        });

    }); // RSS Feeds



    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element. */

        //inspired by https://www.w3schools.com/jquery/html_hasclass.asp
        it('menu element is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });

        /* TODO: Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again. */

        it('menu element changes visibility when menu icon is clicked', function() {

            $link = $('.menu-icon-link');
            spyOn($link, 'click');

            $link.click();
            expect($link.click).toHaveBeenCalled();

            expect($("body").hasClass("")).not.toBeTruthy();
        });
    }); //end The menu



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('loadFeed is called and completes and there is at least one element', function() {




            //loadFeed is async
        })
    }); // end Initial Entries

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

             var simulatedAjaxResponse = {
      name: "The Best Feed",
      url: "http://feeds.feedburner.com/thebestfeed"
    };

        it('when new feed is added content changes', function() {


        return expect (loadFeed).toContain("url", "http://feeds.feedburner.com/thebestfeed");
            //loadFeed is async
        });
    });

}());