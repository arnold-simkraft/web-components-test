<!-- Setup of the project for Web-Component || Completed -->
1. Custom Components (in this case SDT-Components) needs to export the CSS
2. Web-Component (Name all the Vue Components that you want to export to end with "*.ce.vue")
3. In the HTML import it with the name of the component i.e. (wc-app)

<!-- Build SDT components To be used in Web-Component App -->
cd v3-sdt-components
npm install
npm run build

<!-- Build Web-Component App  -->
cd v3-web-component
npm install
npm run build
<!-- Copy Files Created in "dist" folder of "v3-web-component" into "test-wc-app" -->


<!-- Install Live Server Extension of VSCode to easily setup a server for a folder -->

open the "test-wc-app" folder with the newly copied files in VSCode
In VSCode click on "Go Live" at the bottom bar

<!-- Once setup is completed and running -->
Note: 
1. The "Click Me" Button is not styled; but, the 2 divs are styled
2. The Shadow Root contains the style for both ".btn" & ".bg-color".
3. The style tag for ".bg-color" contains 1 scope (which was the scope in the web-component)
4. The style tag for ".btn" contains 2 scope (which are the scopes in the web-component & sdt-components combined)
5. The Shadown DOM for the "Click Me" button only shows scope for web-component instead of both the scopes.

<!-- To Get the custom components to work with css -->
Change the vue components to non-scoped in SDT-Components Library (Eg:- Remove scoped to "Button.vue")
- build the SDT-Components
- switch to Web-Component app, npm install, npm build
- copy the files to test-wc-app
- run the live server again