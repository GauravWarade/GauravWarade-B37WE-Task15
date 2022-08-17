function showInput() {
    document.getElementById('first').innerHTML = 
                document.getElementById("fname").value;
    document.getElementById('last').innerHTML = 
                   document.getElementById("lname").value;
    document.getElementById('addr').innerHTML = 
                document.getElementById("address").value;
    document.getElementById('pin').innerHTML = 
                document.getElementById("pincode").value;
      document.getElementById('stat').innerHTML = 
                document.getElementById("state").value;
    document.getElementById('coun').innerHTML = 
                document.getElementById("country").value;
    // document.getElementById('pav').innerHTML = 
    //             document.getElementById("pavbhaji").value;
    // document.getElementById('chat').innerHTML = 
    //             document.getElementById("chaat").value;
// for radio
    var genderresult ;
    if(document.getElementById('male').checked){
    genderresult= document.getElementById('male').value;
    }else {
    genderresult= document.getElementById('fmale').value;
    }
    document.getElementById('gen').innerHTML = genderresult;

   //document.getElementById('form').reset();      

// for check box
let ch1 = document.getElementById("pavbhaji");
let ch2 = document.getElementById("chaat");
let ch3 = document.getElementById("pizza");

let checkval = [];
if (ch1.checked){
    checkval.push(ch1.value)
}
if (ch2.checked){
    checkval.push(ch2.value)
}
if (ch3.checked){
    checkval.push(ch3.value)
}
if(checkval.length > 1){
    document.getElementById('food').innerHTML = checkval;
}else {
    alert("Please select atleast two Choice of Food.");
    return false;
}
document.getElementById('form').reset();
}