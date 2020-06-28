<template>
  <header class="navbar-header">
    <div class="flex items-center justify-between">
      <div>
        <img src="@/assets/logo-escuro.svg" class="p-2 inline-block h-14">
      </div>
      <!-- fazer tudo com sm md e lg pra ficar responsivo -->
      <div class="navbar-button">
        <button @click="isOpen = !isOpen" type="button" class=" p-2 block hover:text-black focus:text-black rounded-full focus:outline-none bg-pink-600 font-bold">
          <font-awesome-icon class="hover:bg-opacity-25 focus:bg-opacity-25" :icon="['fas', 'bars']" />
        </button>
      </div>
    </div>
    <nav class="navbar-text" :class="isOpen ? 'block' : 'hidden'">
        <a href="" class="block hover:bg-black rounded text-white"> Diversos</a>
        <a href="" class="block hover:bg-black rounded text-white"> Influenciadores</a>
        <a href="" class="block hover:bg-black rounded text-white"> Marketing</a>
        <a href="" class="block hover:bg-black rounded text-white"> Notícias</a>
        <a href="" class="block hover:bg-black rounded text-white"> Canal Influu</a>
        <a href="" class="block hover:bg-black rounded text-white">
          <font-awesome-icon :icon="['fas', 'search']" />
        </a>
      </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
