const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "music1",
        title: "Psycho",
        artist: "Harrdy Sandhu",
    },
    {
        name: "music2",
        title: "Faasle",
        artist: "Aditya Rikhari",
    },
    {
        name: "music3",
        title: "Tere Hawale",
        artist: "Arijit Singh",
    },
    {
        name: "music4",
        title: "Mi Amor",
        artist: "Sharn",
    }
]

let isPlaying = false;
const playMusic = () => {

    isPlaying = true;

    music.play();            // play()  function already defined in javascript

    play.classList.replace("fa-play", "fa-pause");   // to change play icon to pause icon

    img.classList.add("anime")     //when clicking on button , image gets started rotating
};

const pauseMusic = () => {
    isPlaying = false;

    music.pause();            //pause() function already defined in javascript

    play.classList.replace("fa-pause", "fa-play");   // to change pause icon to play icon

    img.classList.remove("anime")     //when clicking on button , image gets stops rotating
};

play.addEventListener('click', () => {
    //checking condition 
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
})

//changing the music data 

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3" ;
    img.src = "images/" + songs.name + ".jpg" ;
};

songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic()
};
const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic()
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
