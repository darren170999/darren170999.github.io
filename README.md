# Currently
## My Engineering Blog, personal domains and pages
# Future 
## An engineering space to demonstrate POCs and takeaways of my learnings.
# Tech
## React, Typescript, ChakraUI, Firebase, Firestore, Fire analytics, Node 16 (Not gonna upgrade, a stamp on when I started)
## 0.1.0(React-Scripts)
For single-page applications (SPAs) like those created with Create React App, S3 or GitHub Pages (or similar static site hosts) don't know how to handle client-side routing correctly.
Why This Happens
Client-Side Routing: SPAs uses this to handle URL changes without reloading the page. When you navigate within the app, the JavaScript handles the routing, so everything works fine.
Server-Side Request: When you refresh the page, the browser makes a direct request to the server for the current URL. Hosts will serve files from the server, and if there's no file that matches the URL directly (e.g., http://example.com/anything), you get a 404 error.
