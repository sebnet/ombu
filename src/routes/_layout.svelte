<script>
import Nav from '../components/navigation/Nav.svelte';
import GlobalStyle from '../components/global/GlobalStyle.svelte'
export let segment;
</script>


<Nav {segment}/>

<main>
	<slot></slot>
</main>