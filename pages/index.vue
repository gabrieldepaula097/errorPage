<template>
  <div class="container h-screen flex flex-col items-center justify-center m-auto">
    <NavBar />
    <ErrorMessage />
    <Footer />
  </div>
</template>

<script>
import NavBar from './NavBar'
import ErrorMessage from './ErrorMessage' 
import Footer from './Footer'

export default {
  components: {
    NavBar, ErrorMessage, Footer
  }
}
</script>
