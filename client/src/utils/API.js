import axios from "axios";

export default {
    // ===========API request to server side login/register===========
    register(data) {
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    },


    //===========Band requests=========
    getBands: function() {
        return axios.get("/api/artists")
    }, 
    getUserArtists: function(userid) {
        return axios.get("/api/user/artists/" + userid)
    },
    getBand: function(id) {
        return axios.get("/api/artists/" + id)
    },
    deleteBand: function(id) {
        return axios.delete("/api/artist/" + id);
    },
    deleteUser: function(id) {
        return axios.delete("/api/user/edit/" + id);
    },
    saveBand: function(artistData) {
        return axios.post("/api/artists", artistData)
    },

    // =========Band/User Edit========
    editUser: function(userid){
        return axios.put("/api/user/edit/" + userid)
    },
    editBand: function(bandid){
        return axios.put("api/artist/" + bandid)
    },
    //This is the search method to return specific bands per the users input
    searchBand: function(artist){
        return axios.get("/api/artists/" + artist)
    },
    searchGenre: function(genre){
        return axios.get("/api/genres/" + genre)
    },
    //Getting band information from user side(?)
    FollowBand: function(bandid) {
        return axios.post("/api/user/following/" + bandid)
    }
}