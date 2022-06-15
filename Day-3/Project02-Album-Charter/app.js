const URL = "https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=";

var app = new Vue({
    el: "#app",
    data: {
        artistInput: "",
        searchAlbumList: [],

        pickedAlbumList: [],
        tempList: [],

        pickedUp: -1,
        pickedUpAlbum: {},
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
        },
        removeAlbum: function (index) {
            this.pickedAlbumList.splice(index, 1);
        },
        pickupAlbum: function (index) {
            this.pickedUp = index;
            this.pickedUpAlbum = this.pickedAlbumList[index];

            this.tempList = this.pickedAlbumList;

            console.log("picked up", this.pickedUp);
        },
        dropAlbum: function (drop_index) {
            if (this.pickedUp < 0) { return; }
            
            if (drop_index >= this.pickedAlbumList.length) {
                drop_index = this.pickedAlbumList.length - 1;
            }

            // console.log("dropped", drop_index);
            // 1. grab temp of the album
            let movedAlbum = this.pickedUpAlbum;
            // 2. delete the old album
            this.pickedAlbumList.splice(this.pickedUp, 1);
            // 3. insert the new album
            this.pickedAlbumList.splice(drop_index, 0, movedAlbum);
            // 4. drop the album
            this.pickedUp = -1;
        },
        hoverAlbum: function (hover_index) {
            if (this.pickedUp < 0) { return; }
            
            if (hover_index >= this.pickedAlbumList.length) {
                hover_index = this.pickedAlbumList.length - 1;
            }

            // 1. grab temp of the album
            let movedAlbum = this.pickedUpAlbum;
            // 2. delete the old album
            this.pickedAlbumList.splice(this.pickedUp, 1);
            // 3. insert the new album
            this.pickedAlbumList.splice(hover_index, 0, movedAlbum);
        }
    }
});

// TODO
// [x] Red CSS outline
// [x] List on the right side displaying album names
// [~] hover with temporary list showing