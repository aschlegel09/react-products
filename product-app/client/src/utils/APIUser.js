import axios from "axios";

export default {

  getUsers: function() {
    return axios.get("/api/profile")
    // .then(function(response) {
        // console.log(response.data[0].email + " " + response.data[0].name);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
        
    // })
  },

  getUser: function(id) {
    return axios.get("/api/profile/" + id);
  }

};
