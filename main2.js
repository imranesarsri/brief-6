const arr = [];
let nom = document.getElementById("nom");
let prénom = document.getElementById("prénom");
let email = document.getElementById("email");
let télephone = document.getElementById("télephone");
let genre = document.getElementsByClassName("genre");
let legroupe = document.getElementsByName("legroupe");
let leclub = document.getElementsByName("leclub");
let button = document.getElementById("button");
let myRegex = /^[a-zA-Z-\s]+$/;
let regexemail = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,}$','g');
let numtest = /(06|05|07)\d{8}$/;
let labelnom = document.getElementById("labelnom");
let labelprenom = document.getElementById("labelprenom");
let labelemail = document.getElementById("labelemail");
let labeltelephone = document.getElementById("labeltelephone");

// la vlidation de nom
nom.onblur  = function(){
    if(nom.value.length <= 1) {
        document.getElementById("erorrNom").innerHTML="ce champ obligatoir";
        nom.style.border='solid 2px red';
        labelnom.style.color='red';
    }else if( nom.value.length > 15 ){
        document.getElementById("erorrNom").innerHTML="il ya plus de 15 charactere";
        nom.style.border='solid 2px red';
        labelnom.style.color='red';
    }else if( myRegex.test(nom.value) === false ){
        document.getElementById("erorrNom").innerHTML="seules les lettres sont autorisees";
        nom.style.border='solid 2px red';
        labelnom.style.color='red';
    }else {
        document.getElementById("erorrNom").innerHTML=" ";
        nom.style.border='solid 2px green';
        labelnom.style.color='#fff';
        arr.push(true);
    }
}

// la validation de Prénom

prénom.onblur   = function(){
if (prénom.value.length <= 1) {
    document.getElementById("erorrPrénom").innerHTML="ce champ obligatoir";
    prénom.style.border='solid 2px red';
    labelprenom.style.color='red';
} else if( prénom.value.length > 15 ){
    document.getElementById("erorrPrénom").innerHTML="il ya plus de 15 charactere";
    prénom.style.border='solid 2px red';
    labelprenom.style.color='red';
} else if( myRegex.test(prénom.value) === false ){
    document.getElementById("erorrPrénom").innerHTML="seules les lettres sont autorisees";
    prénom.style.border='solid 2px red';
    labelprenom.style.color='red';
}else {
    document.getElementById("erorrPrénom").innerHTML=" ";
    prénom.style.border='solid 2px green';
    labelprenom.style.color='#fff';
    arr.push(true);
}
}

// la validation de Email

email.onblur = function(){
if (email.value.length <= 1) {
    document.getElementById("erorrEmail").innerHTML="ce champ obligatoir"
    email.style.border='solid 2px red';
    labelemail.style.color='red';
} else if( regexemail.test(email.value) === false ){
    document.getElementById("erorrEmail").innerHTML="ce nest pas email"
    email.style.border='solid 2px red';
    labelemail.style.color='red';
}else {
    document.getElementById("erorrEmail").innerHTML="";
    email.style.border='solid 2px green';
    labelemail.style.color='#fff';
    arr.push(true);
}
}

// la validation de Télephone

télephone.onblur = function(){
if (télephone.value.length <= 1) {
    document.getElementById("erorrTélephone").innerHTML="ce champ obligatoir";
    télephone.style.border='solid 2px red';
    labeltelephone.style.color='red'
}else if (numtest.test(télephone.value) === false ) {
    document.getElementById("erorrTélephone").innerHTML=" not valid " ;
    télephone.style.border='solid 2px red';
    labeltelephone.style.color='red'

}else{
    document.getElementById("erorrTélephone").innerHTML="" ;
    télephone.style.border='solid 2px green';
    labeltelephone.style.color='#fff';
    arr.push(true);
}
}

// la validation de Genre et Groupe et club ,en plus de reverifier nam et prenom et email et telephone


document.getElementById("button").onclick = function(e){
    e.preventDefault();

let nom = document.getElementById("nom");
let prénom = document.getElementById("prénom");
let email = document.getElementById("email");
let télephone = document.getElementById("télephone");
let genre = document.getElementsByClassName("genre");
let legroupe = document.getElementsByName("legroupe");
let leclub = document.getElementById("leclub");
let button = document.getElementById("button");
let labelnom = document.getElementById("labelnom");
let labelprenom = document.getElementById("labelprenom");
let labelemail = document.getElementById("labelemail");
let labeltelephone = document.getElementById("labeltelephone");
let myRegex = /^[a-zA-Z-\s]+$/;
let numtest = /(05|06|07)\d{8}$/;
let regexemail = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,}$','g');
const arr = [] ;

// la validation de nom

if (nom.value.length <= 1) {
    document.getElementById("erorrNom").innerHTML="ce champ obligatoir";
    nom.style.border='solid 2px red';
    labelnom.style.color='red';
} else if( nom.value.length > 15 ){
    document.getElementById("erorrNom").innerHTML="il ya plus de 15 charactere";
    nom.style.border='solid 2px red';
    labelnom.style.color='red';
} else if( myRegex.test(nom.value) === false ){
    document.getElementById("erorrNom").innerHTML="seules les lettres sont autorisees";
    nom.style.border='solid 2px red';
    labelnom.style.color='red';
}else {
    document.getElementById("erorrNom").innerHTML=" ";
    nom.style.border='solid 2px green';
    labelnom.style.color='#fff';
    arr.push(true);
}

// la validation de Prénom

if (prénom.value.length <= 1) {
    document.getElementById("erorrPrénom").innerHTML="ce champ obligatoir";
    prénom.style.border='solid 2px red';
    labelprenom.style.color='red';
} else if( prénom.value.length > 15 ){
    document.getElementById("erorrPrénom").innerHTML="il ya plus de 15 charactere";
    prénom.style.border='solid 2px red';
    labelprenom.style.color='red';
} else if( myRegex.test(prénom.value) === false ){
    document.getElementById("erorrPrénom").innerHTML="seules les lettres sont autorisees";
    prénom.style.border='solid 2px red';
    labelprenom.style.color='red';
}else {
    document.getElementById("erorrPrénom").innerHTML=" ";
    prénom.style.border='solid 2px green';
    labelprenom.style.color='#fff';
    arr.push(true);
}

// la validation de Email

if (email.value.length <= 1) {
    document.getElementById("erorrEmail").innerHTML="ce champ obligatoir";
    email.style.border='solid 2px red';
    labelemail.style.color='red'
} else if( regexemail.test(email.value) === false ){
    document.getElementById("erorrEmail").innerHTML="ce nest pas email";
    email.style.border='solid 2px red';
    labelemail.style.color='red'
}else {
    document.getElementById("erorrEmail").innerHTML=" ";
    email.style.border='solid 2px green';
    labelemail.style.color='#fff'
    arr.push(true);
}

// la validation de Télephone

if (télephone.value.length <= 1) {
    document.getElementById("erorrTélephone").innerHTML="ce champ obligatoir";
    télephone.style.border='solid 2px red';
    labeltelephone.style.color='red'
}else if (numtest.test(télephone.value) === false ) {
    document.getElementById("erorrTélephone").innerHTML="not valid" ;
    télephone.style.border='solid 2px red';
    labeltelephone.style.color='red'
} else{
    document.getElementById("erorrTélephone").innerHTML=" " ;
    télephone.style.border='solid 2px green';
    labeltelephone.style.color='#fff';
    arr.push(true);
}

// la validation de Genre

if(genre[0].checked === false &&  genre[1].checked == false ){
    document.getElementById("erorrGenre").innerHTML="obligatoir de choisir";
}else {
    document.getElementById("erorrGenre").innerHTML=" " ;
    arr.push(true);
}

// la validation de Groupe 

let tester = false ;
for(let i = 0 ; i < legroupe.length ; i++){
    if (legroupe[i].checked === true) {
        tester = true
        break;
}
}
if(tester === false){
    document.getElementById("erorrGroupe").innerHTML="obligatoir de choisir";
}else {
    document.getElementById("erorrGroupe").innerHTML=" " ;
    arr.push(true);
}

// la validation de club

if(leclub.selectedOptions.length === 0 ){
    document.getElementById("erorrclub").innerHTML="obligatoir de choisir";
}else if(leclub.selectedOptions.length > 3) {
    document.getElementById("erorrclub").innerHTML="max 3 " ;
}else {
    document.getElementById("erorrclub").innerHTML=" " ;
    arr.push(true);
}

// submit les information

console.log(arr)

if(arr.length === 7){
    forma.submit();
}

} 
