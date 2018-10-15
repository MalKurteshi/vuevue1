<template>

  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic js-tilt" data-tilt>
          <img src="images/img-01.png" alt="IMG">
        </div>

        <form class="login100-form validate-form">
					<span class="login100-form-title">
						Member Login
					</span>

          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <input class="input100" type="text" name="email" placeholder="Email">
            <span class="focus-input100"></span>
            <span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
          </div>

          <div class="wrap-input100 validate-input" data-validate = "Password is required">
            <input class="input100" type="password" name="pass" placeholder="Password">
            <span class="focus-input100"></span>
            <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn">
              Login
            </button>
          </div>

          <div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
            <a class="txt2" href="#">
              Username / Password?
            </a>
          </div>

          <div class="text-center p-t-136">
            <a class="txt2" href="CreateAccount.html">
              Create your Account
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>



  <!--<div class="hello">-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<p>-->
      <!--For guide and recipes on how to configure / customize this project,<br>-->
      <!--check out the-->
      <!--<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.-->
    <!--</p>-->
    <!--<h3>Installed CLI Plugins</h3>-->
    <!--<ul>-->
      <!--<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>-->
      <!--<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>-->
    <!--</ul>-->
    <!--<h3>Essential Links</h3>-->
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>-->
      <!--<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>-->
      <!--<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>-->
    <!--</ul>-->
    <!--<h3>Ecosystem</h3>-->
    <!--<ul>-->
      <!--<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>-->
      <!--<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>-->
      <!--<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>-->
      <!--<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>-->
    <!--</ul>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



/*h3 {*/
  /*margin: 40px 0 0;*/
/*}*/
/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/
/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/
/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
