<template>
  <main>
    <div class="headline">
      <h1> MULTIMEDIA DESIGNER</h1>
      <ul>
        <li>Front-end Dev.</li>
        <li>UX/UI</li>
        <li>Graphic Design</li>
      </ul>
    </div>

    <div class="description">
      <p>Hi, i'm <span>Jakob Colmorn Johannsen</span>. I'm currently studying multimediadesign on EASV in Esbjerg, Denmark. 
        My education is all about graphic design, photo- and videoproduction, UX/UI, and front-end development. </p>
        <div class="neon-button"><a href="#">Read more</a></div>
    </div>

    <div class="spacertest"></div>


    <!-- <div :class="{active: isActive}">Test</div> -->
  </main>
</template>

<style scoped>
main {
  font-family: 'Segoe UI';
}

p {
  font-weight: 700;
  font-size: 20px;
}

/* --- HEADLINE --- */

.headline {
  /* min-height: 75vh; */
  margin-top: 25vh;
  padding: 0 15% 0 15%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 15% 0 15%;
}

.headline h1 {
  font-weight: 800;
  font-size: 70px;
  line-height: 1.2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vt-c-white);
  border-top: 6px solid var(--vt-c-black-mute);
}

.headline ul {
  width: 100%;
  padding: 0;
  border-bottom: 6px solid var(--vt-c-black-mute);
  display: inline-flex;
  justify-content: center;

}

.headline ul li {
  width: 835.15px;
  color: var(--vt-c-green);
  font-weight: 800;
  font-size: 30px;
  line-height: 1.1;
  /* float: left; */
  text-align: center;
  list-style-type: none;
  padding: 0 20px 0 20px;
  margin-bottom: 10px;
  
}

.headline ul li:not(:nth-child(1)) {
  border-left: 6px solid var(--color-border);
}

/* --- HEADLINE DONE --- */


/* --- DESCRIPTION --- */

.description {
  margin-top: 15vh;
  padding: 0 15% 0 15%;
}

.description span {
  color: var(--vt-c-green);
  font-weight: 700;
  font-size: 20px;
}

/* --- DESCRIPTION DONE --- */


/* --- NEON BUTTON  --- */

.neon-button {
  padding-top: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.neon-button a {
  color: var(--vt-c-green);
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  border: var(--vt-c-green) 0.15em solid;
  padding: 0.15em 1em 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 
  0 0 0.125em hsl(0 0% 100% / 0.3),
  0 0 1.5em var(--vt-c-green);

  box-shadow: inset 0 0 0.7em 0 var(--vt-c-green), 0 0 1em 0 var(--vt-c-green);

  position: relative;
}

/* --- NEON BUTTON SHADOW/PERSPECTIVE --- */
.neon-button a::before {
  pointer-events: none;
  content: '';
  position: absolute;
  background-color: var(--vt-c-green);
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;

  transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
  filter: blur(1.5em);
  opacity: 0.7; 
  transition: opacity 100ms linear;
}

/* --- NEON BUTTON HOVER GLOW --- */
.neon-button a::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em 0.5em var(--vt-c-green);
  opacity: 0;
  transition: opacity 100ms linear;
  background-color: var(--vt-c-green);
  z-index: -1;
  transition: opacity 100ms linear;
}

/* --- NEON BUTTON HOVER TEXT FX --- */
.neon-button a:hover {
  color: var(--vt-c-black);
  text-shadow: none;
}

/* --- NEON BUTTON ACTIVATING EXTRA SHADOW GLOW --- */
.neon-button a:hover::after {
  opacity: 1;
}

/* --- NEON BUTTON ACTIVATING BUTTON GLOW --- */
.neon-button a:hover::before {
  opacity: 1;
}

/* --- NEON BUTTON DONE --- */

.spacertest{
  height: 800px;
}

</style>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)

</script>