let currentSong = new Audio();

async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div"); //creates a new <div> element in the document.
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");  //retrieves all <a> elements within the <div> and stores them in the variable as.

    let songs = []
    for(let i = 0; i < as.length; i++){
        const element = as[i]
        if(element.href.endsWith(".mp3")){  //This condition checks if the href attribute of the <a> element ends with ".mp3", indicating that it is a link to an MP3 file.
            songs.push(element.href.split("/songs/")[1])
//above [1] is written because when we use split method so it breaks the string in two part like an array two elements one is the left part of the 'songs' and other is the right part of the 'song' so we needed the right part of the songs so to access it we have written [1] as it is an array so the it will start from 0 so yes 0,1 two elements.
        }
    }
    return songs;
}

const playMusic = (track)=>{
    //let audio = new Audio("/songs/" + track)
    currentSong.src = "/songs/" + track
    currentSong.play()

}

async function main(){

    
    //Get the list of all the songs
    let songs = await getSongs()
    

    //Show all the osngs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName('ul')[0]
    for(const song of songs){
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Abhi</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div> </li>`;
    }

    // //Play the first song
    // var audio = new Audio(songs[0]);
    // audio.play();

    // audio.addEventListener("loadeddata", () => {
    //     console.log(audio.duration, audio.currentSrc, audio.currentTime);
    //     // The duration variable now holds the duration (in seconds) of the audio clip
    //   });


    //Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML); 
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    //Attach an event listener to play, previous and next buttons
    play.addEventListener("click" , () => {
        if(currentSong.paused){
            currentSong.play()
        }
        else{
            currentSong.pause()
        }
    })

}
main()