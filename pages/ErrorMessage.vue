<template>
  <div class="text-white flex items-center justify-center max-w-100 error">
    <div class="max-w-50">
      <p class="font-thin error-text-top text-textColorH1 text-right">Oops...</p>
      <h1 class="font-bold error-text-center">404</h1>
      <p class="error-text-bottom text-center"> Página Não Encontrada</p>
      <div class="justify-between flex items-center max-w-98">
        <div class="h-12">
          <a href="#" class="text-sm">
            <font-awesome-icon :icon="['fas', 'arrow-left']"/> Voltar
          </a>
        </div>
        <div class="h-12">
          <a href="#">
            <font-awesome-icon :icon="['fas', 'home']"/> Home
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
