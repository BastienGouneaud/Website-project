window.onload=function(){date(); difference();}

function date(){
  var message='';
  var date=new Date();
  var jour=date.getDate();
  var mois=date.getMonth()+1;
  var annee=date.getFullYear();
  message+="La Date actuelle: "+jour+"."+mois+"."+annee;
  document.getElementById('date').innerHTML=message;
}

function difference(){
  var message='';
  var date_actuelle=new Date();
  var date_lancement=new Date('June 21, 2022 00:00:00');
  var temps_diff = date_lancement.getTime()-date_actuelle.getTime();
  var jours_diff = temps_diff / (1000 * 3600 * 24);
  var temps = Math.floor(jours_diff);
  var heure = Math.floor(((jours_diff-(Math.floor(jours_diff)))*24));
  message+="Il reste "+temps+" jours et "+heure+" heures avant la fenêtre de lancement de Artemis I"
  document.getElementById('diff').innerHTML=message;
}
