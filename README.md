# Project Overview

In this project this web-based application reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! 


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. 

it's an important skill to have!


## What  I've learn?

How to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## Tests
### RSS Feeds:

- Test feeds are defined
- Test feed URLs are defined and contain content
- Test feed names are defined and contain content

### To run this unit test, take the following steps:

1. Clone this repo to your local machine and open index.html in the root folder. 
2. This index loads jasmine reader at the bottom of the feed.
3. Verify the following tests (Also clearly documented in feedreader.js:
4. Loop through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
5. Loop through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
6. Ensure the menu element is hidden by default. 
7. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
8. Ensure the menu changes visibility when the menu icon is clicked.
9. Ensure when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
10. Ensure when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
11. Psuedowrote a test that greys out link when previously clicked to visually indicate read. Functionality not built out yet.


