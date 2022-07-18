import { defineCustomElement } from "vue";
import "./app.css";

import WCApp from "./WCApp.ce.vue";

const WCElement = defineCustomElement(WCApp);

customElements.define("wc-app", WCElement);
