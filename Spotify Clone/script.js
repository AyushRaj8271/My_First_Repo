console.log("Welcome to Spotify");

//Intiallize the Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let gif =document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar'); 
let songs=[
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"},
    {songName:"ASLMSAOHD",filePath: "/songs/1.mp3",coverPath: "/covers/1.jpg"}
]

//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
     audioElement.pause();   
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})    
//Listem to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})
