<template>
    <div>
        <section class="OVERMIJ">
            <div class="container">
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
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-15">
                        <div class="title text-left">
                            <h1 class="mb-5 mt-5">WHAT IK LEUK VIND?</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div class="box">
                            <i class="fas fa-futbol fa-4x"></i>
                            <h3 class="fw-bold mb-2 mt-2">Football</h3>
                            <p>Sinds ik jong was, voetballde ik heel veel. Ik vind sporten in het algemeen heel leuk.
                            </p>

                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="box">
                            <i class="fas fa-headset fa-4x"></i>
                            <h3 class="fw-bold mb-2 mt-2">Gaming</h3>
                            <p>Ik game heel veel, speciaal shooting games. Daar ben ik een echte pro in.</p>


                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="box">
                            <i class="fas fa-code fa-4x"></i>
                            <h3 class="fw-bold mb-2 mt-2">Coding</h3>
                            <p>Ik heb toen ik 10 jaar oud was een computer gekregen van mijn ouders, sinds toen vond ik
                                codes leuk en wou ik een programmeur worden.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
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
</style>
<script>

export default {
    name: 'AboutMe'
}
</script>