<script>
    import BootScreen from "./lib/BootScreen.svelte";
    let name = $state('world');
</script>

<main>
  <BootScreen/>
  <div class="flex justify-center text-center pt-4">
    <h1 class="text-4xl font-bold">Hello, {name}!</h1>
  </div>
</main>