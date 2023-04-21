<template>
  <div class="about">
    <h1>ABOUT ME</h1>
    <p>My name is <span>Jakob Colmorn Johannsen</span>. Currently i am studying multimedia design in Denmark on Business Academy SouthWest. The education is all about designing and producing digital products. At this time i have gained experience of working with Adobe Photoshop, Illustrator, InDesign, XD, Premiere Pro, After Effects to design products. Another big aspect of the education is learning about front-end development. My experiences so far is working with CSS/HTML, SCSS, JavaScript, Vue.js and Wordpress(PHP).</p>
    <p>The aspects that interests me the most about the education, is the <span>web development</span>. Don't get me wrong, the design aspects are a great bonus and fun to work with, but web development is what i see myself continuing with after the education is finished.</p>
    <p>Aside from my education, i am a quite <span>tech savvy</span> person. I always tend to find new "geeky" subjects to learn, and enjoy the process of improving, learning new stuff and broaden my lsit of competencies. </p>
    <p>One example of this is the fact that i, about 5 years ago, decided to explore the subject of <span>sound engineering</span>, which lead me to my favourite hobby, or side hustle as some might say, which is traveling around the country as a sound engineer for a variety of venues and bands that hires my service.</p>
  </div>
</template>

<style>
main {
  font-family: 'Segoe UI';
}

p {
  padding: 5vh 0 0 0;
  font-weight: 700;
  font-size: 16px;
  color: var(--vt-c-white-soft)
  /* padding: 0 15% 0 15%; */
}


span {
  color: var(--vt-c-green);
  font-weight: 700;
  font-size: 16px;
}

.about {
  /* min-height: 75vh; */
  margin: 10vh 0;
  padding: 0 15% 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 15% 0 15%;
}

.about h1 {
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

@media screen and (max-width:730px){
  .about {
    padding: 0 5% 0 5%;
  }
  
  .about h1 {
    font-size: 45px;
  }

  .about p {
    font-size: 13px;
  }

  span {
    font-size: 13px;
  }


}

@media screen and (max-width:500px){
  .about {
    padding: 0 2% 0 2%;
  }
  
  .about h1{
    font-size: 25px;
  }

  .about p {
    font-size: 12px;
  }
}

</style>
