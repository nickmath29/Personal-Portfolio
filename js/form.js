function copy_info(info){
    console.log(info.checked);
    if(info.checked){
        document.querySelector('#bill-street').value = document.querySelector('#street').value;
        document.querySelector('#bill-city').value = document.querySelector('#city').value;
        document.querySelector('#bill-country').value = document.querySelector('#country').value;
        document.querySelector('#bill-state').value = document.querySelector('#state').value;
        document.querySelector('#bill-zip').value = document.querySelector('#zip').value;
     } else {
        document.querySelector('#bill-street').value ="";
        document.querySelector('#bill-city').value = "";
        document.querySelector('#bill-country').value = "";
        document.querySelector('#bill-state').value = "";
        document.querySelector('#bill-zip').value = "";
     }
}

function check_email(){
    let email = document.querySelector('#email').value;
    let email2 = document.querySelector('#email2').value;
    if(email != email2){
        alert("Please fill out the form correctly.");
    }
    return true;
}