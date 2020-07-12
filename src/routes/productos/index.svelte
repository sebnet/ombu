<script context="module">
export function preload({params,query}){
    return this.fetch("productos.json")
        .then(r=>r.json())
        .then(prods=>{return prods})
        
};

</script>

<script>
 let [nombre,description] = prods;

</script>

<div>{nombre}</div>
<div>{description}</div>