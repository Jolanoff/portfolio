<template>
    <div>
        <section class="PROJECTEN content-border">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-15">
                        <div class="text-center">
                            <h1 class="mb-3">PROJECTEN</h1>
                            <p class="mb-4">projecten die ik alleen heb gedaan. (er komt nog meer...)</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-12">
                        <div class="container">
                            <div class="box2">
                                <div class="imgBx">
                                    <img src="../assets/ProjectenIMG/Project1.png">
                                </div>
                                <div class="content">
                                    <h2>Animeoff</h2>
                                    <p>Ik heb deze project gedaan omdat ik meer over api's wil leren.</p>
                                    <a href="https://animeoff.genshinworldrecords.com/" class="btn btn-primary">view Project</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </section>
    </div>
    
</template>

<script>
export default {
    name: 'MyProjects'
}
</script>

<style>
.container .box2 {
    position: relative;
    min-width: 100%;
    height: 700px;
    margin: 20px 0;
    overflow: hidden;
}

.container .box2 .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    clip-path: circle(900px at center 100px);
    transition: 0.5s;
    transition-delay: 0.5s;

}

.container .box2:hover .imgBx {
    clip-path: circle(0px at center 100px);
    transition-delay: 0s;
    opacity: 0.5;

}

.container .box2 .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   



}

.container .box2 .content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55%;
    padding: 20px;

    text-align: center;
}

.container .box2 .content h2 {
    margin: 0;
    padding: 0;
}

.container .box2 .content a {
    text-decoration: none;
    background: #EF233C;
    color: #fff;
    padding: 5px;
    display: inline-block;
    --bs-btn-focus-shadow-rgb: none;
    border-color: #D90429;
}

.container .box2 .content h2,
.container .box2 .content p,
.container .box2 .content a {
    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
}

.container .box2:hover .content h2 {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;

}

.container .box2:hover .content p {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.7s;
}

.container .box2:hover .content a {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.9s;
}
</style>