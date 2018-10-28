
    <template>
        <div class="limiter" >
            <div class="container-login100" >
                <div class="wrap-login100" style="width: 75%" >
                    <form class="wrap-input100" >
            <span class="login100-form-title">
						Make your own insurance policy
					</span>
                        <div id="carInsurance" >
                            <div class="wrap-input100 validate-input"  data-validate = "Name is a required field">
                                <!--Qikjo mushet prej kur te klikon butonin perkates ne index.html-->
                                Policy type:<input class="input100" type="text" name="policyType" placeholder=""
                                                   v-model="form.policyType">
                                <span class="focus-input100"></span>
                            </div>
                           <!-- <div class="wrap-input100 validate-input" data-validate = "Surname is a required field">

                                Car Make:<input class="input100" type="text" name="Surname" placeholder=""
                                                v-model="form.carMake">
                                <span class="focus-input100"></span>
                            </div> -->
                            <!--START date dhe end date-->
                            <div class="wrap-input100 validate-input" data-validate = "Required!!">
                                Choose start date for your insurance: <input class="input100" type="date" id="startDate" name="RiskStart" placeholder=""
                                                                             v-model="form.startDate">
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Required!!">
                                Choose end date for your insurance: <input class="input100" type="date" id="endDate" name="RiskEnd" placeholder=""
                                                                           v-model="form.endDate">
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Required!!">
                                Previously insured: </br>
                                <input  type="radio" id="PreviuslyInsuredYes" name="PreviuslyInsuredYes"  value="Yes"
                                                                           v-model="form.endDate" />
                                <label for="PreviuslyInsuredYes">Yes  </label>
                                <input  type="radio" id="PreviuslyInsuredNo" name="PreviuslyInsuredNo"  value="No"
                                        v-model="form.endDate" />
                                <label for="PreviuslyInsuredNo">   No</label>
                               <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Required!!">
                                Previously damaged: </br>
                                <input  type="radio" id="PreviuslyDamagedYes" name="PreviuslyDamagedYes"  value="Yes"
                                        />
                                <label for="PreviuslyDamagedYes">Yes  </label>
                                <input  type="radio" id="PreviuslyDamagedNo" name="PreviuslyDamagedNo"  value="No"
                                        />
                                <label for="PreviuslyDamagedNo">   No</label>
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Required!!">
                                Birthday for human / Year or production for assets:
                               <input class="input100" type="date" id="Birthday" name="Birthday" placeholder=""
                                                                           v-model="form.endDate">
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Required!!">
                                Cost of the product:
                                <span >$</span>
                                <input class="input100" type="number" id="Cost" name="Cost" placeholder="" style=" width: 50%"
                                       >
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Image is a required field">
                                Upload an image: <input class="input100"  accept="image/gif, image/jpeg, image/png" type="file" name="Photo" placeholder="">
                                <span class="focus-input100"></span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate = "Desckription is required">
                              <label for="textarea">  Desckripe the product: </label><textarea class="input100" name="Desckription" placeholder="" id="textarea"> </textarea>
                                <span class="focus-input100"></span>
                            </div>


                        </div>

                        <div class="container-login100-form-btn">
                            <button class="login100-form-btn" type="submit">
                                Submit the form
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




<!-- Versioni i vjeter
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
-->


<!--<script>-->
    <!---->
    <!--import RiskDetails from './RiskDetails.vue';-->


    <!--export default{-->
        <!--name: 'Policies',-->
        <!--data() {-->
            <!--return {-->
                <!--click: {-->
                    <!--carInsurance: "carInsurancaaaaae",-->
                    <!--healthInsurance: "healthInsurance"-->
                <!--},-->
            <!--}-->
        <!--},-->





        <!--methods: {-->
            <!--gotoRiskDetails1: function(value) {-->
                <!--this.$router.push("riskDetails/carInsurance");-->


            <!--},-->
            <!--gotoRiskDetails2: function(value) {-->
                <!--this.$router.push("riskDetails/propertyInsurance");-->


            <!--},-->
            <!--gotoRiskDetails3: function(value) {-->
                <!--this.$router.push("riskDetails/lifeInsurance");-->


            <!--},-->
            <!--gotoRiskDetails4: function(value) {-->
                <!--this.$router.push("riskDetails/healthInsurance");-->


            <!--},-->
        <!--}-->
    <!--}-->

<!--</script>-->
<style>
    @import "./assets/main.css";
</style>







