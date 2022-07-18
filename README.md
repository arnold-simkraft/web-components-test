<!-- Build SDT components To be used in Web-Component App -->
cd v3-sdt-components
npm install
npm run build

<!-- Build Web-Component App  -->
cd v3-web-component
npm install
npm run build

<!-- To Run The "test-wc-app" App -->
Copy Files Created in "dist" folder of "v3-web-component" into "test-wc-app"
Install Live Server Extension of VSCode to easily setup a server for a folder
open the "test-wc-app" folder with the newly copied files in VSCode
In VSCode click on "Go Live" at the bottom bar

<!-- Once setup is completed and running -->
Notice the App in the browser: 
1. The "Click Me" Button is not styled; but, the 2 divs are styled
2. Open the Developer Tool in the browser, The Shadow Root's style tag contains the style for both ".btn" & ".bg-color".
3. The style tag for ".bg-color" contains 1 scope (which was the scope in the web-component)
4. The style tag for ".btn" contains 2 scope (which are the scopes in the web-component & sdt-components combined)
5. The Shadown DOM for the "Click Me" button only shows scope for web-component instead of both the scopes.

<!-- --------------------------------------------------------------------------------------- -->

<!-- To Get the custom components to work with css i.e. The "Click Me" Button with Css -->
Change the vue components to non-scoped in SDT-Components Library (Eg:- Remove scoped in "Button.vue" file)
- build the SDT-Components: npm run build
- switch to Web-Component app, npm install, npm run build
- Copy Files Created in "dist" folder of "v3-web-component" into "test-wc-app"
- run the live server again