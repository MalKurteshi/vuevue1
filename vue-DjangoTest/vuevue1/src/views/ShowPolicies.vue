<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
    </div>
  </div>


</template>
<script>
    export default {
            data () {
                return {
                    // Note 'isActive' is left out and will not appear in the rendered table
                    fields: {
                        last_name: {
                            label: 'Person last name',
                            sortable: true
                        },
                        first_name: {
                            label: 'Person first name',
                            sortable: false
                        },
                        foo: {
                            // This key overrides `foo`!
                            key: 'age',
                            label: 'Person age',
                            sortable: true
                        },
                        city: {
                            key: 'address.city'
                        },
                        'address.country': {
                            label: 'Country'
                        }
                    },
                    items: [
                        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald', address: { country: 'USA', city: 'New York' } },
                        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', address: { country: 'Canada', city: 'Toronto' }},
                        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: { country: 'Australia', city: 'Sydney' } },
                        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', address: { country: 'England', city: 'London' } }
                    ]
                }
            }
        }


</script>
<style>
  @import "./assets/main.css";
</style>








