
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    "use strict";
   /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */


   // This is the RSS Feeds suite that tests the feeds 
   describe('RSS Feeds', function () {

       
       it('Is the feeds defined', function () { // checks if allfeeds has been defined and if it is not empty
           expect(allFeeds).toBeDefined();
           expect(allFeeds.length).not.toBe(0);
       });

       
       it('urls should be defined', function () { // Checks if allFeeds have a url and if the url is not empty
           for (var i = 0; i < allFeeds.length; i++) {
               expect(allFeeds[i].url).toBeDefined();
               expect(allFeeds[i].url.length).not.toBe(0);
           }
       });

       
      // Check if feed's name property is defined and not empty
       it('Does it have a name', function() {
          for(let feed of allFeeds) {
             expect(feed.name).not.toBe(undefined);
             expect(feed.name).not.toBe('');
        }
       });
   });


   // New  suite that will test the menu
   describe('The Menu', function () {

       
       it('Menu element is hidden by default', function () {
           expect($('body').hasClass('menu-hidden')).toEqual(true);
       });

       
       it('Toggle on/off click event', function () {    // Toggles on click event if the menu appears or disappears
                                                            // Calls the class of 'menu-icon-link' 
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(true);
       });
   });

   
   describe('Initial Entries', function () { // New  suite that will test initial entries

       // Calls a function to do an asynchronous request 
       beforeEach(function (done) {
           loadFeed(0, function () {
               done();
           });
       });

       // Tests if the loadFeed function has at least a single '.entry' within
       // the '.feed' container
       it('define if feed has at least a single entry', function () {
           expect($('.feed .entry').length).toBeGreaterThan(0);
       });
   });

   // New test suite that looks for new feed selections
   // Test suite for loading new content after initial load
   describe('New Feed Selection', function() {

    const container = document.querySelector('.feed');
    const firstFeed = [];

   
    beforeEach(function(done) { // Load multiple feeds and compare content to ensure change

        
        loadFeed(0);    // Load first feed
        
        
        Array.from(container.children).forEach(content => { // Store values of first feed
            firstFeed.push(content.innerText);
        });

        // Load second feed
        loadFeed(1, done);
    });
      
      it('test different from the previous test', function() {  // Compare first feed against new feed content
        Array.from(container.children).forEach( (content, index) => {
            expect(content.innerText !== firstFeed[index]).toBe(true);
        });
    });
   });
}());

