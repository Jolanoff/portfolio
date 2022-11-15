<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ">
          <li class="nav-item">
            <router-link to="/"><a class="nav-link fw-bold" aria-current="page" href="#">HOME</a></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/#AboutMe">OVER MIJ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/#Skills">ERVARING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/#Projects">PROJECTS</a>
          </li>
          <li class="nav-item">
            <router-link to="contactMe"><a class="nav-link" aria-current="page" href="#">CONTACT</a></router-link>
          </li>
          

        </ul>
        <div class="d-flex justify-content-right">
            <li class="nav-item">
              <ToggleDark :mode="mode" @Toggle="$emit('Toggle')" />
            </li>
          </div>
      </div>
    </div>
  </nav>

</template>
<style>
li {
  list-style-type: none;
}

nav {
  background-color: #EDF2F4;
  transition: 0.5s;
}

.nav-link {
  color: #1d1e25;
}

.dark nav {
  background-color: #1d1e25;
  transition: 0.5s;
}

.dark .nav-link {
  color: #EDF2F4;
}

.nav-link:hover {
  color: #D90429;
}

.dark .navbar-toggler {
  color: #D90429;
  background-color: white;
}

.dark .navbar-toggler-icon {
  background-color: white;
}
</style>

<script>

import ToggleDark from './ToggleDark.vue'

export default {
  name: 'NavBar',

  props: ['mode'],
  components: {
    ToggleDark
  }
}
</script>