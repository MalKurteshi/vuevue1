<template>
    <div class="limiter" >
        <div class="container-login100" >
            <div class="wrap-login100" style="width: 75%" >
                <form class="wrap-input100" >
            <span class="login100-form-title">
						Choose your risk type policy
					</span>
                    <div id="carInsurance" v-if="$route.params.insType=='carInsurance'">
                        <div class="wrap-input100 validate-input"  data-validate = "Name is a required field">
                            <!--Qikjo mushet prej kur te klikon butonin perkates ne index.html-->
                            Policy type:<input class="input100" type="text" name="policyType" placeholder=""
                                               v-model="form.policyType">
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate = "Surname is a required field">
                            <!--e zgjedh modelin e vetures-->
                            Car Make:<input class="input100" type="text" name="Surname" placeholder=""
                                            v-model="form.carMake">
                            <span class="focus-input100"></span>
                        </div>
                        <!--START date dhe end date-->
                        <div class="wrap-input100 validate-input" data-validate = "Required!!">
                            Choose start date for this risk type: <input class="input100" type="date" id="startDate" name="RiskStart" placeholder=""
                                                                         v-model="form.startDate">
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate = "Required!!">
                            Choose end date for this risk type: <input class="input100" type="date" id="endDate" name="RiskEnd" placeholder=""
                                                                       v-model="form.endDate">
                            <span class="focus-input100"></span>
                        </div>
                    </div>
                    <div id="propertyInsurance"  v-if="$route.params.insType=='propertyInsurance'">
                        <p>This is div for property insurance</p>
                    </div>
                    <div id="lifeInsurance"  v-if="$route.params.insType=='lifeInsurance'">
                        <p>This is div for life insurance</p>
                    </div>
                    <div id="healthInsurance"  v-if="$route.params.insType=='healthInsurance'">
                        <p>This is div for health insurance</p>
                    </div>
                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" type="submit">
                            Get a quote
                        </button>
                    </div>


                </form>


            </div>


        </div>
    </div>




</template>
<script>

    export default {


        data() {
            return {
                form: {
                    policyType: '',
                    carMake: '',
                    startDate: '',
                    endDate: ''},


            }},





    }
</script>



<!--<template> //versioni i vjeter-->
<!--<div class="limiter">-->
    <!--<div class="container-login100">-->
        <!--<div class="wrap-login100" style="width: 75%">-->

            <!--<form class="wrap-input100">-->
            <!--<span class="login100-form-title">-->
						<!--Choose your risk type policy-->
					<!--</span>-->

         <!---->

            <!--<div class="wrap-input100 validate-input"  data-validate = "Name is a required field">-->
            <!--&lt;!&ndash;Qikjo mushet prej kur te klikon butonin perkates ne index.html&ndash;&gt;    -->
            <!--Policy type:<input class="input100" type="text" name="policyType" placeholder="">-->
            <!--<span class="focus-input100"></span>-->
            <!--</div>-->
            <!--<div class="wrap-input100 validate-input" data-validate = "Surname is a required field">-->
            <!--&lt;!&ndash;e zgjedh modelin e vetures&ndash;&gt;    -->
            <!--Car Make:<input class="input100" type="text" name="Surname" placeholder="">-->
            <!--<span class="focus-input100"></span>-->
            <!--</div>-->
            <!--&lt;!&ndash;START date dhe end date&ndash;&gt;-->
            <!--<div class="wrap-input100 validate-input" data-validate = "Required!!">-->
            <!--Choose start date for this risk type: <input class="input100" type="date" id="startDate" name="RiskStart" placeholder="">-->
            <!--<span class="focus-input100"></span>-->
            <!--</div>-->
            <!--<div class="wrap-input100 validate-input" data-validate = "Required!!">-->
            <!--Choose end date for this risk type: <input class="input100" type="date" id="endDate" name="RiskEnd" placeholder="">-->
            <!--<span class="focus-input100"></span>-->
            <!--</div>-->
        <!---->

                <!--<div class="container-login100-form-btn">-->
                    <!--<button class="login100-form-btn">-->
                       <!--Get a quote-->
                    <!--</button>-->
                <!--</div>-->


            <!--</form>-->

        <!--</div>-->
    <!--</div>-->
<!--</div>-->

<!--</template>-->