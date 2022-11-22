<template>
    <div>
        <section class="OVERMIJ content-border">
            <div class="container mt-5">
                <div class="row">
                    <div class="col">
                        <img src="../assets/PersonalPic.jpeg" id="Personal-pic">
                    </div>

                    <div class="col">
                        <h2>PERSOONLIJKE INFORMATIE</h2>
                        <h6 id="About" class="fw-bold">OVER MIJ</h6>

                        <p class="mt-5">
                            Mijn naam is Jolan Abou Zid en ik ben 20 jaar oud.
                            Ik heb ruim heel veel ervaring met computers opgedaan sinds ik heel jong was, ook bij
                            verschillende bedrijven in Syrië,
                            nu ben ik bezig om mij diploma te halen bij het ROC Nova College als een software developer
                            in Hoofddorp.
                            Ik heb goed evering met C#, HTML, Javascript(meer Vue), MySQL en PHP.</p>
                        <a href="https://github.com/Jolanoff"><i class="fa-brands fa-github info-icon"></i></a>
                        <a href="https://www.linkedin.com/in/jolannn/"><i
                                class="fa-brands fa-linkedin info-icon"></i></a>
                    </div>
                    
                </div>
            </div>
            
        </section>
    </div>
    <div class="content-devider"></div>
</template>
<style>
.box {
    margin-top: 10%;
    font-weight: 600;
    padding: 0 4vw 4vw;
    height: 35vh;
    border-right: 3px;
    border-left: 3px;
    border-style: solid;
    border-image: linear-gradient(to bottom, #EDF2F4, #D90429, #EDF2F4) 1 100%;
    transition: 0.5s;

}

@media(max-width: 1000px) {
    p {
        font-size: 15px;
        font-weight: 600;
    }

    .btn-primary {
        width: 30%;
    }
}

.info-icon {
    border: 1px solid;
    border-radius: 10px;
    padding: 10px;
    font-size: 5vh;
    margin: 1%;
}

.box:hover {
    color: #D90429;
    transition: 0.5s;
    border-image: linear-gradient(to bottom, #EDF2F4, rgb(12, 12, 12), #EDF2F4) 1 100%;
}

#About {
    text-align: left;

}

h1 {
    line-height: 1.2em !important;
    font-weight: 600;
    color: black;
}

#Personal-pic {
    max-width: 100%;
    height: auto;
}

h2 {
    line-height: 1.2em !important;
    font-weight: 600;
    color: black;
}

.icons {
    width: 250px;
    height: 250px;
    margin: 0.5em;


}

.dark .icons {
    filter: brightness(0) invert(1);
}

.item_grid {
    display: grid;
    grid-gap: 4.5%;
    grid-template-columns: 30% 30% 30%;
    padding-top: 0;
    margin: 0;
    font-weight: normal;
}

.item_grid div {
    min-height: 300px;
    text-align: center;
}

.item_grid h2 {
    margin-top: 10px;
    margin-bottom: 15px;
    border-bottom: 8px solid rgba(0, 0, 0, .05);
    display: inline-block;
    padding-bottom: 15px;
}

.item_grid .icons {
    width: 100px;
    height: 100px;
}

.item_grid p {
    text-align: center;
    display: inline-block;
    margin-bottom: 40px;
    text-decoration: none;
    color: #6c6c6c;
    font-weight: normal;
}
.content-devider{
    margin-top: 3%;
    margin-bottom: 3%;
    height: 2px;
    width: 100%;
    background-color: #b1b1b1;
    
    
}
.content-border{
    position: relative;
    z-index: 3000;
    border-left: 2px dashed rgba(0,0,0,.075);
    border-right: 2px dashed rgba(0,0,0,.075);
}
.dark .content-border{
    
    border-left: 2px dashed rgba(168, 168, 168, 0.075);
    border-right: 2px dashed rgba(145, 145, 145, 0.075);
}
</style>
<script>

export default {
    name: 'AboutMe'
}
</script>