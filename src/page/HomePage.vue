<template>
  <div class="d-grid">
    <div id="header" class="h-100">
      <WebHeader />
    </div>
    <div id="AboutMe" class="px-5">
      <AboutMe />
    </div>
    <div id="LeukVind" class="px-5">
      <LeukVind/>
    </div>
    <div id="Skills" class="px-5">
      <MySkills />
    </div>
    <div id="Projects" class="px-5">
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
import LeukVind from './../components/LeukVind.vue';
export default {
  components: {
 WebHeader, AboutMe, MySkills, MyProjects, LeukVind
  },
}
</script>

<style>


</style>
