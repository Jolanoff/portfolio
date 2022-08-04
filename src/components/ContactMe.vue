<template>
    <div>
    <div class="row">
        
        <div class="col-lg-6 container head" style="height:10vh; ">
            <div class="d-flex flex-row justify-content-center mt-5">
                
            <router-link to="/"><p>Home</p></router-link>
            <p><i class="fas fa-arrow-right arrow"></i></p>
            <router-link to="ContactMe"><p>Contact Me</p></router-link>
                
            </div>
        </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                </div>
                <div class="col-12 d-flex justify-content-center mt-5 mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.3126710371416!2d4.676121916113403!3d52.29217917977166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e7bdb77a6bd7%3A0xaebee5a8c264cbe!2sJadelaan%2020%2C%202132%20XW%20Hoofddorp!5e0!3m2!1sen!2snl!4v1657579748576!5m2!1sen!2snl"
                        width="1250" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h1 class="mb-3">CONTACT GEGEVENS</h1>
                <div class="col-lg-6 d-flex flex-column">
                    <div class="d-flex flex-row p-4">
                        <i class="fas fa-school fa-4x"></i>
                        <div class="details">
                            <div class="fw-bold">SCHOOL ADRESS</div>
                            <div>Jadelaan 20</div>
                            <div>2132XW Hoofddorp</div>
                        </div>
                    </div>
                    <div class="d-flex flex-row p-4">
                        <i class="fas fa-envelope fa-4x"></i>
                        <div class="details">
                            <div class="fw-bold">EMAIL ADRESS</div>
                            <div>jawlan.abozaid12@gmail.com</div>
                        </div>

                    </div>
                    
                    <div class="d-flex flex-row p-4 mb-5">
                        <i class="fas fa-phone fa-4x"></i>
                        
                        <div class="details">
                            
                            <div class="fw-bold">TELEFOON NUMMER</div>
                            <div>+31628898727</div>
                            
                        </div>
                    </div>
                </div>

            </div>





        </div>



    </div>
</template>

<script>
export default {

}
</script>

<style>
.dark a{
    color: white;
}
.arrow{
    margin-right: 0.5vw;
    margin-left: 0.5vw;
}
.head{
   width: 100%;
    
}
.details {
    margin-left: 3%;
    padding: 2%;
}

h3 {
    font-weight: 600;
}
a{
    color: black;
    transition: 0.5s;
}
a:hover{
    color: #EF233C;
    transition: 0.5s;
}
</style>