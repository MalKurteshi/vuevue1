<template>
  <div id="app">

    <b-navbar toggleable="md" type="dark" variant="info" v-if="authenticated"><!--E SHTUME-->

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Britecore</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#"> <router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item href="#"> <router-link to="/about">About</router-link></b-nav-item>
          <b-nav-item href="#"> <router-link to="/policies">Policies</router-link></b-nav-item>
          <b-nav-item href="#"> <router-link to="/register">Register</router-link></b-nav-item>
          <b-nav-item href="#"> <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link><!--E SHTUME-->
          </b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>


          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile Settings</b-dropdown-item>
            <b-dropdown-item href="#">Policy Settings</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view  @authenticated="setAuthenticated"/><!--E SHTUME-->

  </div>
</template>
<script>//E SHTUME
export default {
    name: 'App',
    data() {
        return {
            authenticated: false,
            mockAccount: {
                username: "nraboy",
                password: "password"
            }
        }
    },
    mounted() {
        if(!this.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        },
        logout() {
            this.authenticated = false;
        }
    }
}
</script>


