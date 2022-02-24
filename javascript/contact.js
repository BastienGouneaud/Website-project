function valide(){
  var form = document.getElementById('form_contact');
  var er = false;
  var telephone = form.tel;
  var nom = form.name;
  var email = form.mail;

  if(telephone.value == ""){
    document.getElementById('er_tel').innerHTML = "Entrez un numero de téléphone valide";
    er = true;
  }else document.getElementById('er_tel').innerHTML = "";

  if (nom.value == ""){
    document.getElementById('er_name').innerHTML = "Entrez un nom valide";
    er = true;
  }else document.getElementById('er_name').innerHTML = "";

  if (email.value == ""){
    document.getElementById('er_mail').innerHTML = "Entrez adresse mail valide";
    er = true;
  }else document.getElementById('er_mail').innerHTML = "";

  if(er == false){
    form.submit();
  }
}
