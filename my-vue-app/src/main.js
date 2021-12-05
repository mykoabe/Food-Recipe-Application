import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import "./index.css";

import App from "./App.vue";
import apolloClient from "./services/apollo/index";
import router from "./router";
import store from "./store";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
app.use(router);
app.use(store)
app.mount("#app");
