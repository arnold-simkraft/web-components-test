<!-- To Setup the projects for Testing -->

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
