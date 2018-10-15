<template>
<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100" style="width: 75%">

            <form class="wrap-input100">
            <span class="login100-form-title">
						Choose your risk type policy
					</span>

         

            <div class="wrap-input100 validate-input"  data-validate = "Name is a required field">
            <!--Qikjo mushet prej kur te klikon butonin perkates ne index.html-->    
            Policy type:<input class="input100" type="text" name="policyType" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Surname is a required field">
            <!--e zgjedh modelin e vetures-->    
            Car Make:<input class="input100" type="text" name="Surname" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <!--START date dhe end date-->
            <div class="wrap-input100 validate-input" data-validate = "Required!!">
            Choose start date for this risk type: <input class="input100" type="date" id="startDate" name="RiskStart" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Required!!">
            Choose end date for this risk type: <input class="input100" type="date" id="endDate" name="RiskEnd" placeholder="">
            <span class="focus-input100"></span>
            </div>
        

                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
                       Get a quote
                    </button>
                </div>


            </form>

        </div>
    </div>
</div>

</template>