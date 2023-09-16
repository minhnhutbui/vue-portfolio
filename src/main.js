import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import boostrap from "bootstrap/dist/js/bootstrap.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, fab);

createApp(App)
  .use(boostrap)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
