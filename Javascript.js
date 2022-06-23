var name= prompt('Enter your name');
var height= prompt('Enter your height');
var country= prompt('Enter your country');
if (name && height && country){
    document.getElementById('name').innerHTML=name;
    document.getElementById('country').innerHTML=country;
    document.getElementById('height').innerHTML=height;
}




