import { wrap } from "svelte-spa-router/wrap";
import { AuthService } from "@services/auth";

export default {
  "/": wrap({
    asyncComponent: () => import("@pages/Home/Home.svelte"),
  }),
  "/about": wrap({
    asyncComponent: () => import("@pages/About.svelte"),
    // guard
    conditions: [(): boolean => {
      console.log("pregunta");
      if (!AuthService.checkSession()) {
        return true;
      }

      return true;
    }]
  })
};
