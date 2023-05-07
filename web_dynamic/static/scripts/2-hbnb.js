#!/usr/bin/node

document.addEventListener('load', input_check())

function input_check() {
	if ($("input") == True) {
		let s = [];
		s.append(amenity.name)
		}
	}	
	$("<h4></h4>").append(s)
$.get("http://0.0.0.0:5001/api/v1/status/", textstatus)
if (textstatus == "OK"){
	$("div #api_status").append("class=available")
}
