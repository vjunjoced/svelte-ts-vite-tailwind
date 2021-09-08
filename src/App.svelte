<script>
  import Router, { push } from "svelte-spa-router";
  import routes from "./routes";

  function conditionsFailed() {
    push("/");
  }
</script>

<main>
  <Router
    {routes}
    on:conditionsFailed={conditionsFailed}
    restoreScrollState={true}
  />
</main>
