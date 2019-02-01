/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    //"use strict";
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Is the feed defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Urls should be defined', function() {
            for(i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Does it have a name', function() {
            for(i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
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
 /* new test suite named "New Feed Selection" */
 describe ('New Feed Selection', function(){

    // Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

    let firstFeed;
    let secondFeed;

    beforeEach((done)=>{
        loadFeed(0, function () {
            firstFeed = $('.feed').html();
            done();                
        });
    });

    it('loads new feed', function(done){

        loadFeed(1, function(){
            secondFeed = $('.feed').html();
            expect(secondFeed).not.toBe(firstFeed);
            /* You should call done function here - This ensures that the second set of feeds are loaded before we actually go and try to compare the values of the feeds. */
            done();
        });

    });
});
    
}());
