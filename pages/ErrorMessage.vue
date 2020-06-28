<template>
  <div class="text-center text-white align-middle max-w-100">
    <p class="font-thin text-xl text-textColorH1">Oops...</p>
    <h1 class="font-bold text-xl">404</h1>
    <button class="py-4 px-6"> Página Não Encontrada</button>
    <div class="p-2 justify-between flex flex-row">
       <div class="w-1/2 h-12 m-auto">
        <a href="" class="text-sm">
          <font-awesome-icon :icon="['fas', 'arrow-left']"/> Voltar
        </a>
       </div>
       <div class="w-1/2 h-12 m-auto">
        <a href="">
          <font-awesome-icon :icon="['fas', 'home']"/> Home
        </a>
       </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
