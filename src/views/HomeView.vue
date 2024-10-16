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
      <p>Hi, i'm <span>Jakob Colmorn Johannsen</span>. I'm currently studying multimediadesign on EASV in Esbjerg,
        Denmark.
        My education is all about graphic design, photo- and videoproduction, UX/UI, and front-end development. </p>
        <RouterLink to="/about"><div class="neon-button"><a href="#">Read more</a></div></RouterLink>
    </div>

    <div class="hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.06 74.81">
        <g id="triangle1">
          <path class="cls-1"
            d="M48.79,0l-11.71,20.28h3.64l8.07-13.97,20.81,36.04H27.98l8.6-14.89h-3.64l-10.42,18.04h52.54L48.79,0Z" />
        </g>
        <g id="triangle2">
          <path class="cls-1"
            d="M0,29.31l26.27,45.5,11.82-20.47h-3.64l-8.18,14.16L5.46,32.46H47.08l-8.46,14.65h3.64l10.28-17.8H0Z" />
        </g>
        <g id="work-smart">
          <text class="cls-2" transform="translate(11.82 25.62)">
            <tspan x="0" y="0">workSmart</tspan>
          </text>
        </g>
        <g id="not-hard">
          <text class="cls-2" transform="translate(36.86 52.44)">
            <tspan x="0" y="0">notHard</tspan>
          </text>
        </g>
      </svg>

    </div>

    <p class="work-text">I believe that smart choices and ease of use has great significance on efficiency.
      Smart decisions and user friendly products will <span>create value</span> at the end of the day.</p>


    <table>
      <tr>
        <th>devTools</th>
        <th>designTools</th>
      </tr>
      <tr>
        <td>JSS</td>
        <td>Photoshop</td>
      </tr>
      <tr>
        <td>HTML/CSS</td>
        <td>Illustrator</td>
      </tr>
      <tr>
        <td>SCSS</td>
        <td>InDesign</td>
      </tr>
      <tr>
        <td>PHP</td>
        <td>XD</td>
      </tr>
      <tr>
        <td>Vue</td>
        <td>Premiere Pro</td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td>After Effects</td>
      </tr>
      <tr>
        <td></td>
        <td>Studio One</td>
      </tr>
      <tr>
        <td></td>
        <td>ProTools</td>
      </tr>
    </table>

    
    <div class="portfolio">
      <h1>PORTFOLIO</h1>
      
      <div class="portfolio-container">
        <div v-for="item in state" :key="item" class="portfolio-item">
          <img :src="item.image" alt="item image">
          <div class="text-box">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }} <a href="">View product</a></p>
            <p class="p-category" :class="item.category">{{ item.category }}</p>
            <p class="p-tech">{{ item.tech }}</p>
            
          </div>
        </div>
      </div>
    </div>






    <!-- <div :class="{active: isActive}">Test</div> -->
  </main>
</template>



<script setup>


</script>

<style scoped>
/* --- HEADLINE --- */

p {
  padding: 0 15% 0 15%;
}

span {
  color: var(--vt-c-green);
  font-weight: 700;
  font-size: 20px;
}

.headline {
  /* min-height: 75vh; */
  margin-top: 25vh;
  padding: 0 15% 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

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


.description {
  margin-top: 15vh;
}




/* --- NEON BUTTON  --- */


main {
  font-family: 'Segoe UI';
}

p {
  font-weight: 700;
  font-size: 20px;
}

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


svg {
  height: 500px;
  width: 500px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.cls-1 {
  fill: #27773a;
}

.cls-2 {
  fill: #efeded;
  font-size: 6.15px;
}

.cls-2 tspan {
  font-family: 'Segoe UI';
  font-weight: 800;
}

/* --- FOR ANIMATION -- USE LATER ---  */

.hidden {
  opacity: 1;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
}

.show {
  opacity: 1;
}

.work-text {
  margin-top: 10vh;
  margin-bottom: 200px;
}


/* --- TOOLS TABLE --- */


table {
  margin-left: auto;
  margin-right: auto;
}

table th {
  font-weight: 700;
  font-size: 30px;
  padding: 10px 30px;
  color: var(--vt-c-green);
  text-align: right;
}

table th:nth-child(2) {
  text-align: left;
}

table td {
  font-weight: 700;
  font-size: 20px;
  padding: 0 30px;
  text-align: right;

}



table td:nth-child(2) {
  text-align: left;
}


/* --- TOOLS TABLE DONE --- */


/* --- PORTFOLIO --- */


.portfolio {
  /* min-height: 75vh; */
  margin: 25vh 0;
  padding: 0 15% 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 15% 0 15%;
}

.portfolio h1 {
  font-weight: 800;
  font-size: 70px;
  line-height: 1.2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vt-c-white);
  border-top: 6px solid var(--vt-c-black-mute);
  border-bottom: 6px solid var(--vt-c-black-mute);
}

.portfolio-container {
  /* background-color: grey; */
  width: 100%;
  /* margin: 150px auto; */

}

.portfolio-item {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 50px 0;
  /* background: linear-gradient(90deg, rgba(39, 119, 58, 0.164) 0%, rgba(0,0,0,1) 100%); */
  background: linear-gradient(90deg, rgba(209, 209, 209, 0.075) 0%, rgba(0,0,0,1) 100%);
}

 .portfolio-item:nth-child(even){
  flex-direction: row-reverse;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(209, 209, 209, 0.075) 100%);
} 

.portfolio-item img {

  max-width: 50%;
  object-fit: cover;
  float: left;
  flex-basis: 100%;
}

.text-box {
  /* background-color: green; */
  flex-basis: 100%;
  padding: 0 0 0 10px;
}

.text-box h4 {
  padding: 10px;
  font-weight: 700;
  font-size: 40px;
  color: var(--vt-c-green)
}

.text-box p {
  padding: 0 10px 10px 10px;
  color: var(--vt-c-white-soft);
  font-size: 14px;
  font-weight: 600;
}

.text-box a{
  font-weight: 600;
}

.text-box .p-category {
  padding: 0px 0px 0px 10px;
  color: var(--vt-c-green);
}

.text-box .p-tech {
  padding: 0px 0px 0px 10px;
  color: var(--vt-c-green);
}


@media screen and (max-width: 1270px){
  .headline{
    scale: 75%;
    padding: 0 100px;
  }

  .portfolio h1{
    scale: 75%;
  }

  .portfolio h4{
    scale: 75%;
    text-align: center;
  }

  .text-box .p-category{
    float: left;
  }

  .text-box .p-tech{
    padding: 0;
  }

  .text-box p{
    padding: 10px;
  }
}

@media screen and (max-width: 1105px){
  .headline{
    scale: 65%;
    padding: 0;
  }

  .portfolio h1{
    scale: 65%;
  }

  .portfolio h4{
    scale: 65%;
  }

  p{
    font-size: 15px;
  }

  span{
    font-size: 15px;
  }

  svg{
    scale: 75%;
  }

  .neon-button{
    scale: 75%;
  }

}

@media screen and (max-width: 903px){
  .headline{
    margin-top: 10vh;
  }

  .headline h1{
    font-size: 50px;
  }

  .portfolio h1{
    font-size: 50px;
  }

  .portfolio h4{
    font-size: 50px;
  }

  .description{
    margin-top: 10vh;
  }

  .headline ul li {
    font-size: 20px;
  }


}

@media screen and (max-width: 664px){
  .headline h1{
    font-size: 40px;
  }

  .portfolio h1{
    font-size: 40px;
  }

  .portfolio h4{
    font-size: 40px;
  }

  .headline ul li {
    font-size: 16px;
  }

  p{
    font-size: 13px;
  }

  span{
    font-size: 13px;
  }

  .hidden {
    margin: 100px 0 0 0;
  }

  .work-text{
    margin: 50px 0 100px 0;
  }

  table th {
  font-size: 20px;
  padding: 10px 10px;
  color: var(--vt-c-green);
}

table td {
  font-size: 15px;
  padding: 0 10px;
}

}


</style>

<script setup>
import { ref } from 'vue'

import portfoliodb from '../modules/portfoliodb'
import { RouterLink, RouterView } from 'vue-router'

const { state } = portfoliodb()

// const isActive = ref(true)




</script>