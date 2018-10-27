<template>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="container-login100-form-btn">
                    <button  v-on:click="gotoRiskDetails1" value="Car Insurance" class="login100-form-btn">
                        Car Insurance
                    </button>
                </div>
                <div class="container-login100-form-btn">
                    <button  v-on:click="gotoRiskDetails2" value="Property Insurance" class="login100-form-btn">
                        Property Insurance
                    </button>
                </div>
                <div class="container-login100-form-btn">
                    <button  v-on:click="gotoRiskDetails3" value="Life Insurance" class="login100-form-btn">
                        Life Insurance
                    </button>
                </div>
                <div class="container-login100-form-btn">
                    <button v-on:click="gotoRiskDetails4" value="Health Insurance" class="login100-form-btn">
                        Health Insurance
                    </button>
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
                        Policy 1
                    </button>
                </div>


            </div>
        </div>
    </div>


</template>
<script>
    import RiskDetails from './RiskDetails.vue';


    export default{
        name: 'Policies',
        data() {
            return {
                click: {
                    carInsurance: "carInsurancaaaaae",
                    healthInsurance: "healthInsurance"
                },
            }
        },





        methods: {
            gotoRiskDetails1: function(value) {
                this.$router.push("riskDetails/carInsurance");


            },
            gotoRiskDetails2: function(value) {
                this.$router.push("riskDetails/propertyInsurance");


            },
            gotoRiskDetails3: function(value) {
                this.$router.push("riskDetails/lifeInsurance");


            },
            gotoRiskDetails4: function(value) {
                this.$router.push("riskDetails/healthInsurance");


            },
        }
    }

</script>
<style>
    @import "./assets/main.css";
</style>

<!--Versoni i vjeter-->
<!--<template>-->
	<!---->
<!--<div class="limiter">-->
    <!--<div class="container-login100">-->

        <!--<div class="wrap-login100">-->
           <!---->
            <!---->
            <!--<div class="container-login100-form-btn">-->
                <!--<button v-on:click="gotoRiskDetails" class="login100-form-btn">-->
                    <!--Car Insurance-->
                <!--</button>-->

            <!--</div>-->
            <!--<div class="container-login100-form-btn">-->
                <!--<button class="login100-form-btn">-->
                    <!--Property Insurance-->
                <!--</button>-->
            <!--</div>-->
            <!--<div class="container-login100-form-btn">-->
                <!--<button class="login100-form-btn">-->
                    <!--Life Insurance-->
                <!--</button>-->
            <!--</div>-->
            <!--<div class="container-login100-form-btn">-->
                <!--<button class="login100-form-btn">-->
                    <!--Health insurance-->
                <!--</button>-->
            <!--</div>-->
            <!--<div class="container-login100-form-btn">-->
                <!--<button class="login100-form-btn">-->
                    <!--Policy 1-->
                <!--</button>-->
            <!--</div>-->
            <!--<div class="container-login100-form-btn">-->
                <!--<button  class="login100-form-btn">-->
                    <!--Policy 1-->
                <!--</button>-->
            <!--</div>-->

        <!--</div>-->
    <!--</div>-->
<!--</div>-->


<!--</template>-->
<!--<script>-->


<!--export default{-->
   <!---->
    <!--methods: {-->
        <!--gotoRiskDetails: function() {-->
            <!--this.$router.push("riskDetails");-->
        <!--}-->
    <!--}-->
<!--}-->

<!--</script>-->






