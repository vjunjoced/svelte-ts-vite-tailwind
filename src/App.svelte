<script>
  import Router, { push } from 'svelte-spa-router';
  import routes from './routes';

  async function conditionsFailed() {
    await push('/');
  }
</script>

<main>
  <Router {routes} on:conditionsFailed={conditionsFailed} restoreScrollState={true} />
</main>
