const URL = "https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=";

var app = new Vue({
    el: "#app",
    data: {
        artistInput: "",
        searchAlbumList: [],

        pickedAlbumList: [],
    },
    methods: {
        searchArtist: function () {
            // console.log(this.artistInput);
            // this.artistInput = "";

            fetch(URL + encodeURIComponent(this.artistInput)).then(response => {
                response.json().then(data => {
                    this.searchAlbumList = data.album;
                });
            });
            this.artistInput = "";
        },
        addAlbum: function (index) {
            let album = this.searchAlbumList[index];

            this.pickedAlbumList.push(album);
        }
    }
});
