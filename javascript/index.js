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

function enlever_le_message(){
  document.getElementById("pop_up_bonne_note_2021_bg").style.display = "none";
  document.getElementById("pop_up_bonne_note_2021").style.display = "none"; 
}
