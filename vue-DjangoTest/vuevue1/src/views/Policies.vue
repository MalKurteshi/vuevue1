<template>
	
<div class="limiter">
    <div class="container-login100">

        <div class="wrap-login100">
           
            
            <div class="container-login100-form-btn">
                <button v-on:click="gotoRiskDetails" class="login100-form-btn">
                    Car Insurance
                </button>

            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                    Property Insurance
                </button>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                    Life Insurance
                </button>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                    Health insurance
                </button>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                    Policy 1
                </button>
            </div>
            <div class="container-login100-form-btn">
                <button  class="login100-form-btn">
                    Policy 1
                </button>
            </div>

        </div>
    </div>
</div>


</template>
<script>


export default{
   
    methods: {
        gotoRiskDetails: function() {
            this.$router.push("riskDetails");
        }
    }
}

</script>
<style>
    @import "./assets/main.css";
</style>





