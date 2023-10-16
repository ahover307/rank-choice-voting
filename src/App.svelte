<script>
    import { Router, Link, Route } from "svelte-routing";
    import { initFirebase } from "./firebase";

    export const url = "";

    const [app, analytics] = initFirebase();
</script>

<main>
    <Router {url}>
        <div>
            <Route path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/tos" component={TOS} />
            <Route path="/privacy" component={Privacy} />
        </div>
    </Router>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .read-the-docs {
    color: #888;
  }
</style>
