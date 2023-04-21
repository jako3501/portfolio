<template>
  <div class="contact-container">
    <div class="contact-form">
      <div class="left">
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 458.86 529.84">
  <defs>
    <radialGradient id="radial-gradient" cx="-73.84" cy="261.52" fx="-73.84" fy="261.52" r="1016.27" gradientUnits="userSpaceOnUse">
      <stop offset=".2" stop-color="#d5d5d5"/>
      <stop offset="1" stop-color="#464646"/>
    </radialGradient>
    <radialGradient id="radial-gradient-2" cx="230.17" cy="262.84" fx="230.17" fy="262.84" r="378.95" xlink:href="#radial-gradient"/>
    <radialGradient id="radial-gradient-3" cx="230.17" cy="262.84" fx="230.17" fy="262.84" r="378.95" xlink:href="#radial-gradient"/>
  </defs>
  <g id="Layer_3" data-name="Layer 3">
    <g>
      <polygon class="cls-2" points="23.43 145.99 23.43 383.85 229.43 502.79 435.43 383.85 435.43 145.99 229.43 27.05 23.43 145.99"/>
      <path class="cls-1" d="M229.43,0L0,132.46V397.38l229.43,132.46,229.43-132.46V132.46L229.43,0Zm200.05,380.42l-200.05,115.5L29.38,380.42V149.42L229.43,33.92l200.05,115.5v231Z"/>
      <polygon class="cls-3" points="207.86 103.01 207.86 426.83 164.72 401.91 143.14 389.48 78.43 352.11 78.43 277.39 121.57 252.48 121.57 327.19 164.72 352.11 164.72 177.73 143.14 190.19 78.43 227.56 78.43 177.73 121.57 152.82 143.12 140.39 164.72 127.93 207.86 103.01"/>
      <polygon class="cls-4" points="380.43 177.73 380.43 227.56 315.72 190.19 294.14 177.73 294.14 352.11 337.29 327.19 337.29 252.48 380.43 277.39 380.43 352.11 315.72 389.48 294.14 401.91 251 426.83 251 103.01 294.14 127.93 315.74 140.39 337.29 152.82 380.43 177.73"/>
    </g>
  </g>
</svg>
      </div>
      <div class="right">
        <h2>Contact Me</h2>
        <input type="text" class="field" placeholder="Your Name">
        <input type="email" class="field" placeholder="Your Email">
        <textarea class="field area" placeholder="Description"></textarea>
        <button class="btn">Send</button>
      </div>
    </div>
  </div>
</template>



<script setup>
import portfoliodb from '../modules/portfoliodb'

const { state } = portfoliodb()

</script>


<style scoped>
main {
  font-family: 'Segoe UI';
  width: 100%;
  height: 100vh;
}

p {
  font-weight: 700;
  font-size: 20px;
}

.contact-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* padding: 20px 100px; */
}

.contact-container:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.contact-form {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
}

.left {
  height: 100%;
  /* background-color: grey; */
}

.right {
  padding: 25px 40px;
}

h2 {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: var(--vt-c-white-soft);
  font-size: 30px;
  font-weight: 700;
}

h2:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: var(--vt-c-green);
}

.field {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: var(--vt-c-black-mute);
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: .3s;
  border-radius: 2px;
  outline: none;
  border: none;
  color: var(--vt-c-white-soft);

}

.area {
  min-height: 150px;
}

.btn {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  background-color: #000000;
  color: var(--vt-c-white-soft);
  cursor: pointer;
  outline: none;
  border: 3px solid var(--vt-c-green);
  border-radius: 10px;
}

.btn:hover{
  scale: 102%;
}

svg {
  scale: 60%;
}

.cls-1 {
        fill: url(#radial-gradient);
      }

      .cls-2 {
        fill: #262626;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 6px;
      }

      .cls-3 {
        fill: url(#radial-gradient-2);
      }

      .cls-4 {
        fill: url(#radial-gradient-3);
      }

@media screen and (max-width:800px){
  .contact-form{
    grid-template-columns: 1fr;
  }

  .left {
    height: 100px;
    opacity: 0;
  }
}

</style>