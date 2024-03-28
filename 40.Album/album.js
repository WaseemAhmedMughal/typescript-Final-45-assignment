"use strict";
function make_album(artist, title, track) {
    const album = {
        artist: artist,
        title: title,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
const album1 = make_album('artist 1', 'album title 1');
console.log(album1);
const album2 = make_album('artist 2', 'album title 2');
console.log(album2);
const album3 = make_album('artist 3', 'album title 3', 12);
console.log(album3);
