<template>
    <div class="row">
        <div class="col-1">
        </div>
        <div class="col-5 header-img" style="height:80vh;">
            <div class="header-content">
                <p class="fs-1 fw-bold fst-italic">Hey,<br />Mijn naam is Jolan Abou Zid</p>
                <div class="fs-4 fw-bold ">En ik ben een software developer</div>
                <a class="btn btn-primary mt-4" href="/#AboutMe" role="button">Over Mij</a>
            </div>
        </div>
       

    </div>
</template>

<style>


.btn-primary {
    background-color: #D90429;
    border-color: #D90429;
    --bs-btn-focus-shadow-rgb : none;
    --bs-btn-hover-bg:#D90429;
    --bs-btn-hover-border-color:#D90429;
}

.btn-primary:hover {
    background-color: #EF233C;
    border-color: #EF233C;
}
.header-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/HeaderIMG.png");
  min-width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  position: relative;
}
.header-content{
    color: white;
    margin-top: 10%;
    margin-left: 5%;
}
</style>
<script>

export default {
    name: 'WebHeader'
}
</script>