import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "uno.css";
import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";
import "@vant/touch-emulator";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
