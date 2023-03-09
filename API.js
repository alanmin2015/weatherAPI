// onload function to add the image element for icon
window.onload=function(){
    var out_icon=document.getElementById("icon");
    var image = document.createElement("img");
    out_icon.appendChild(image);
}
function City(id){
// get the element by id
	var out_location=document.getElementById("location");
    var out_temp=document.getElementById("temperature");
    var out_icon=document.getElementById("icon");
    var out_conditions=document.getElementById("conditions");
    var out_feels=document.getElementById("feels");

//Connect to API
	const myAPIkey="838ad7ccc906c867180a815bf6a07c75";
	const url="https://api.openweathermap.org/data/2.5/weather?q="+id+"&appid="+myAPIkey+"&units=metric";

    let xhr= new XMLHttpRequest();

    xhr.onreadystatechange=function(){
    	if(xhr.readyState===4){
    		if(xhr.status===200){
    			const data=xhr.response;
    			console.log(data);   
    			out_location.innerHTML=data.name;	
    			out_conditions.innerHTML=data.weather[0].description;
    			out_temp.innerHTML=data.main.temp+"°C";	
                var icon=data.weather[0].icon;
                document.querySelector("img").src="http://openweathermap.org/img/wn/"+icon+".png";       
                out_feels.innerHTML=data.main.feels_like+"°C";
    	}

// false return
    	else{
    		out_location.innerHTML="API call was unsuccessful";
    		console.log(xhr.status);
    	}
    }
}
xhr.open('GET', url);
xhr.responseType="json";
xhr.send(null);

//Display the information block by button clicked
document.getElementById("output").style.display="block";
};

