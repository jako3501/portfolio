

<script>
import { RouterLink, RouterView } from 'vue-router'






</script>

<template>
  
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/portfolio">Contact</RouterLink>
      </nav>
    </div>
    
  </header>
<Transition name="slide-fade">
  <RouterView />
</Transition>
</template>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  
}

.wrapper {
  display:flex;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-family: 'Segoe UI';
  font-weight: 500;
}

nav a:first-of-type {
  border: 0;
}

header {
    display: flex;
    justify-content: center;
    width: 100%;
  }

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  header .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

}
</style>
