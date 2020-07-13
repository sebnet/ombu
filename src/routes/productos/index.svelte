<script context="module">
export function preload({params,query}){
    return this.fetch(`productos.json`)
        .then(r=>r.json()).then(prods=> {return {prods}})
}
        

 
</script>

<script>

  export let prods;
console.log(prods)
</script>
{#each prods as item}

    <div>{item.title}</div> 
<div>{item.description}</div>
{/each}
