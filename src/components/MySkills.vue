<template>
    <div>
        <section class="ERVARING">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-15">
                        <div class="text-center">
                            <h1 class="mb-3 mt-5">MIJN ERVARING</h1>
                            <p id="ervaren">ervaren die ik heb met programmeertalen</p>
                        </div>
                    </div>
                </div>
                <div class="bar-1">
                    <div class="title">HTML/CSS</div>
                    <div class="bar">
                        <div class="bar-inner" style="width:80% ;">

                        </div>
                        <div class="bar-percent">80%</div>
                    </div>
                </div>
                <div class="bar-1">
                    <div class="title">PHP</div>
                    <div class="bar">
                        <div class="bar-inner" style="width:70%">

                        </div>
                        <div class="bar-percent">70%</div>
                    </div>
                </div>
                <div class="bar-1">
                    <div class="title">Javascript/Vue</div>
                    <div class="bar">
                        <div class="bar-inner" style="width: 70%;">
                        </div>
                        <div class="bar-percent">70%</div>
                    </div>
                </div>
                <div class="bar-1">
                    <div class="title">C#/Unity</div>
                    <div class="bar">
                        <div class="bar-inner" style=" width:75%">

                        </div>
                        <div class="bar-percent">75%</div>
                    </div>
                </div>
                <div class="bar-1">
                    <div class="title">MySQL</div>
                    <div class="bar">
                        <div class="bar-inner" style=" width:80%">

                        </div>
                        <div class="bar-percent">80%</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>

export default {
    name: 'MySkills'
}
</script>

<style>
.container {
    margin-top: 10px;
}

#ervaren {
    font-weight: 600;
}

.title {
    font-weight: bold;
    font-size: 20px;
    color: #D90429;
}

.bar {
    width: 90%;
    height: 35px;
    background: #fff;
    border-radius: 5px;
    position: relative;
    transition: all 2s linear;
}

.bar-1,
.my-skills {
    width: 85%;
    margin: 10px auto 25px;
}

.bar-inner {
    height: 35px;
    line-height: 35px;
    background: #EF233C;
    border-radius: 5px 0 0 5px;
}

.bar-percent {
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 18px;
}
</style>