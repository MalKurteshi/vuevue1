<template>

<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100" style="width: 75%">

            <form class="wrap-input100">
            <span class="login100-form-title">
						Create an Account
					</span>

            <div class="wrap-input100 validate-input" data-validate = "Image is a required field">
                    Upload a profile picture: <input  accept="image/gif, image/jpeg, image/png" type="file" name="Photo" placeholder="">
             <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input"  data-validate = "Name is a required field">
            Name:<input class="input100" type="text" name="Name" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Surname is a required field">
            Surname:<input class="input100" type="text" name="Surname" placeholder="">
            <span class="focus-input100"></span>
            </div>
         
            <div class="wrap-input100 validate-input" data-validate = "Birthday is a required field">
            Birthday: <input class="input100" type="date" name="Birthday" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Address is a required field">
            Address:<input class="input100" type="text" name="Address" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            Email:<input class="input100" type="text" name="email" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Username is required">
            Username:<input class="input100" type="text" name="Username" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Password is a required field">
            Password:<input class="input100" type="password" name="Password" placeholder="">
            <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate = "Verify Password is a required field">
            Verify Password:<input class="input100" type="password" name="Verify password" placeholder="">
            <span class="focus-input100"></span>
            </div>
         <div class="wrap-input100 validate-input" data-validate = "Please select the radio button">
           
            <input type="checkbox" id="chck" name="TermsOfService"><label for="chck"> I accept that the data are protected by the application</label>
            </div>
             
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
                       Create user
                    </button>
                </div>


            </form>

        </div>
    </div>
</div>
</template>

<style scoped>
    @import "./assets/main.css";
</style>
