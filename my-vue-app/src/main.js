import { createApp, provide, h } from "vue";
import { createApolloProvider } from "@vue/apollo-option";
import { authService } from "./services/auth/auth";

import "./index.css";

import App from "./App.vue";
import apolloClient from "./services/apollo/index";
import router from "./router";
import store from "./store";
const idToken = authService.getAccessToken();
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient(idToken),
});

const app = createApp({
  render: () => h(App),
});

app.use(apolloProvider);
app.use(router);
app.use(store);
app.mount("#app");
