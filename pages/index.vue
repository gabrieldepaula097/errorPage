<template>
  <div class="container">
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
