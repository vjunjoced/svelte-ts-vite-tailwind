import App from './App.svelte';
import './style/tailwind.css';

const app = new App({
  target: document.getElementById('app') || document.body
});

export default app;
