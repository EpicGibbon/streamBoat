import axios from "axios";

export default {
    // API request to server side 
    register(data) {
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    },
    //Get all artists
    getBands: function() {
        return axios.get("/api/artists")
    },
    //Get the artists with a specific ID
    getBand: function(id) {
        return axios.get("/api/artists/" + id)
    },
    deleteBand: function(id) {
        return axios.delete("/api/artist/" + id);
    },
    saveBand: function(artistData) {
        return axios.post("/api/artists", artistData)
    }
}