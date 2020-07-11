<script>
import About from "./about.svelte";
import Product from "../components/product/HomeProduct.svelte"
import { onMount } from 'svelte';

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
</script>
<svelte:head>
	<title>Sapper project template</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>
<div class="flex flex-row bg-gray-500 justify-end">
<div class="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 w-10/12 bg-red-500">
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
</div>
</div>