<script>
  import { link } from "svelte-spa-router";
  import Button, { Label } from '@smui/button/styled';
  import Card, { Content } from '@smui/card';
</script>

<h1 class="italic	text-green-600 my-text">Home Page</h1>

<a href="/about" use:link>About</a>

<Button>
  <Label>Click Me</Label>
</Button>


  <Card>
      <Content>You can also use <code>Content</code>.</Content>
    </Card>
<style>
</style>
