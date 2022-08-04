<template>
  <div class="d-grid">
    <div id="header" class="h-100">
      <WebHeader />
    </div>
    <div id="AboutMe" class="p-5 mt-3">
      <AboutMe />
    </div>
    <div id="Skills" class="">
      <MySkills />
    </div>
    <div id="Projects" class="">
      <MyProjects />
    </div>
  </div>
<WebFooter />


</template>

<script>
import WebHeader from './../components/WebHeader.vue';
import AboutMe from './../components/AboutMe.vue';
import MySkills from './../components/MySkills.vue';
import MyProjects from './../components/MyProjects.vue';

export default {
  components: {
 WebHeader, AboutMe, MySkills, MyProjects
  },
}
</script>

<style>


</style>
