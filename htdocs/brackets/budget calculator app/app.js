var enterMoney=document.getElementById('enter_money');
var money;

//Grab the error message

var error=document.getElementById('error');
var errorManage=document.getElementById('error_manage');

//get all manage inputs like (roomrent,accessories,emergency & saving)
var roomrent=document.getElementById('RoomRent');
var accessories=document.getElementById('Accessories');
var emergency=document.getElementById('Emergency');
var saving=document.getElementById('Saving');


//get all output get all element

var showRoom=document.getElementById('show_room');
var showAccessories=document.getElementById('show_access');
var showEmergency=document.getElementById('show_emergency');
var showSaving=document.getElementById('show_saving');


//get loader gif file
var  loader=document.getElementById('loader');
//getthe evaluate button
var evaluate=document.getElementById('evaluate');

//getthe reset button
var resetButton=document.getElementById('reset_button');


//get the manage_div
var manageDiv=document.getElementById('manage_div');

//get result section

var resultSection=document.getElementById('result_section');

//create an event
enterMoney.addEventListener('keyup',showManageMoney);
evaluate.addEventListener('click',showloader);
resetButton.addEventListener('click',reload);


//function to show gif loader image
function showloader(){
    loader.classList.remove("hidden");
    setTimeout(validateManage,1000);
}


//functio to validate imput amount and show the manage section

function showManageMoney(e)
{
    //check whether the key entered is ENTER key or not
    if(e.keyCode==13){
        money = e.target.value;
        //validate the input value
        if(isNaN(money)|| money==0){
            //display error message
            error.classList.remove('hidden');
        }
        else{
            //move ahead & show the manage section div
            error.classList.add("hidden");
            manageDiv.classList.remove('hidden');
        }
    }
}
function validateManage(){
    
    //hide loader image
    loader.classList.add("hidden");
    // validate input fields
 if(roomrent.value=="" || accessories.value=="" || emergency.value=="" || saving.value==""){
     errorManage.innerHTML="Value for field is not given . Please provide the value for all inputs";
 }  
    else{
        errorManage.innerHTML="";
        
        //parse the value to integer
        
        var room_per=parseInt(roomrent.value);
        var access_per=parseInt(accessories.value);
        var emer_per=parseInt(emergency.value);
        var save_per=parseInt(saving.value);
        
        var total=room_per+access_per+save_per+emer_per;
        
        if(total>100){
            errorManage.innerHTML="The Total Percentage is excedding 100%.Please make sure that it is not exceed 100.";
        }else{
            //validating  is complete now calculate the percentage
            calculate(room_per,access_per,emer_per,save_per);
        }  
    }
}
//calculate  percentage
function calculate(roomrent,accessories,emergency,saving){
    var roomrentMoney = (roomrent/100) * money;
    var accessproesMoney = (accessories/100) * money;
    var emergencyMoney = (emergency/100) * money;
    var savingMoney = (saving/100) * money;
    
    
    
    showRoom.innerHTML= roomrentMoney;
    showAccessories.innerHTML=accessproesMoney;
    showEmergency.innerHTML=emergencyMoney;
    showSaving.innerHTML=savingMoney;
    
    resultSection.classList.remove("hidden");
}
//reload the function
function reload(){
    location.reload();
}