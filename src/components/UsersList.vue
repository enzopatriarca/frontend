<template>
  <div id="main_container" class="container-fluid">
    <div class="container">
      <div class="navbar navbar-dark bg-dark">
        <h1 id="title">Users List</h1>
      </div>
      <div style="margin-top: 10px;" class="row">
        <div class="md-12">
          <h3 style="text-align: initial;">You can click on the id or Name for more details!</h3>
          <table style="margin-top: 10px;" class="table" id="datatable">
            <thead>
              <tr  style="text-align: initial;">
                <th>ID</th>
                <th>Name</th>
                <th>HTML URL</th>
                <th>Organizations URL</th>
              </tr>
            </thead>
            <tbody>
              <!-- v-for="item in products" :key="item.id" -->
              <tr style="text-align: initial;" v-for="item in users" :key="item.id">
                <!-- <a class="stretched-link" :href="`/Profile/${item.login[key]}`"></a> -->
                <td><a style="text-decoration: none;color: black;" :href="`/Profile/${item.login}`">{{ item.id }}</a></td>
                <!-- <a class="stretched-link" :href="`/Profile/${item.login[key]}`"></a> -->
                <td><a style="text-decoration: none;color: black;" :href="`/Profile/${item.login}`">{{ item.login }}</a></td>
                <td>{{ item.html_url}}</td>
                <td>{{ item.organizations_url}}</td>
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
  name: 'UsersList',
  data: function () {
    return {
      users: [],
    };
  },
  mounted() {
    var url=''
    if(this.$route.params.since == undefined){
      url = axios.defaults.baseURL.Users
      console.log(url)
    }else{
      url = "https://backend-shawpartners-enzo-patriarca.onrender.com/api/list_users/" + this.$route.params.since
      console.log(url)
    }
    axios.get(url).then((response) => {
      console.log(response.data)
      this.users = response.data;
     
    });
    
  },
  
updated(){
   $('#datatable').DataTable({
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
