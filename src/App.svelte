<script>
    import {onMount, tick} from "svelte";
    import { Router, Link, Route } from "svelte-routing";
    import { initFirebase } from "./utils/firebase.js";

    import Home from "./lib/pages/Home.svelte";
    import Dashboard from "./lib/pages/Dashboard.svelte";
    import About from "./lib/pages/About.svelte";
    import TOS from "./lib/pages/TOS.svelte";
    import Privacy from "./lib/pages/Privacy.svelte";

    import { analytics, app, auth } from "./lib/stores.js";

    export const url = "";
    onMount(() => {
        console.log("Mounting in firebase");
        const [temp_app, temp_analytics, temp_auth] = initFirebase();

        app.update(() => temp_app);
        analytics.update(() => temp_analytics);
        auth.update(() => temp_auth);
    })
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
