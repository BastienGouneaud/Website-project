function pause_play(){
  var video = document.getElementById('bg_video');
  if(document.getElementById("play_pause").value == "Pause Video"){
    video.pause();
    document.getElementById("play_pause").value = "Play Video"
  }else{
    video.play();
    document.getElementById("play_pause").value = "Pause Video"
  }
}
