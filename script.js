let qr;



window.onload = function(){

showHistory();

};



function generateQR(){


let text =
document.getElementById("text").value;



if(text.trim()==""){


alert("Enter text or URL");

return;


}



let box =
document.getElementById("qrcode");



box.innerHTML="";



qr = new QRCode(box,{

text:text,

width:200,

height:200

});



saveHistory(text);



}




function downloadQR(){


let image =
document.querySelector("#qrcode img");



if(!image){


alert("Generate QR first");


return;


}



let link=document.createElement("a");


link.href=image.src;


link.download="QR-Code.png";


link.click();


}





function saveHistory(text){


let history =
JSON.parse(localStorage.getItem("history"))
|| [];



history.unshift(text);



if(history.length>10){

history.pop();

}



localStorage.setItem(

"history",

JSON.stringify(history)

);



showHistory();



}





function showHistory(){


let list =
document.getElementById("history");



if(!list) return;



list.innerHTML="";



let history =
JSON.parse(localStorage.getItem("history"))
|| [];



history.forEach(function(item){


let li=document.createElement("li");


li.innerText=item;


list.appendChild(li);


});


}




function clearHistory(){


localStorage.removeItem("history");


showHistory();


}