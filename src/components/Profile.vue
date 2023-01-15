<template>
    <div id="main_container" class="container-fluid">
      <div class="container">
        <div class="navbar navbar-dark bg-dark">
          <h1 id="title">User Info</h1>
        </div>
        <div class="row">
            <div class="md-12">
                <h3>User Info</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Profile url</th>
                            <th scope="col">Login creation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">{{ this.user_info.id}}</td>
                            <td>{{this.user_info.login}}</td>
                            <td>{{this.user_info.url}}</td>
                            <td>{{this.user_info.created_at}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <h3>List of public repositories of {{ this.user_info.login }}</h3>
          <div class="md-12">
            <table class="table" id="repositories">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>URL of repositorie</th>
                </tr>
              </thead>
              <tbody>
                <!-- v-for="item in products" :key="item.id" -->
                <tr style="text-align: initial;" v-for="item in repositories" :key="item.id">
                  <td>{{ item.id}}</td>
                  <td>{{ item.name}}</td>
                  <td>{{ item.html_url}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  import "jquery/dist/jquery.min.js";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "datatables.net-dt/js/dataTables.dataTables";
  import "datatables.net-dt/css/jquery.dataTables.min.css";
  import axios from "axios";
  import $ from "jquery";
  
  export default {
    name: 'UserProfile',
    data: function () {
      return {
        repositories: [],
        user_info:[],
      };
    },
    mounted() {
        if ( this.$route.params.username  == undefined) {
            window.location.href = "/"
        }

        axios.get("https://backend-shawpartners-enzo-patriarca.onrender.com/api/user_info/" + this.$route.params.username).then ((response) => {
            console.log(response.data)
            this.user_info = response.data
        })
        axios.get("https://backend-shawpartners-enzo-patriarca.onrender.com/api/user_repos/" + this.$route.params.username).then ((response) => {
            console.log(response.data)
            this.repositories = response.data
        })
        // 
    },
    updated(){
      $("#repositories").DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search estimator",
        }
      })
    },
    
  }
  </script>
  
  
  <style>
    #main_container{
      background-color: white;
      display: flex;
      text-align: center;
    }
    #title{
      color: white;
      
    }
  </style>
  