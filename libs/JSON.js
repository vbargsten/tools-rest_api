
function loadJSON(url){
	var jsonloader = $.getJSON( url, function() {
		//console.log( "success" );
		})
		.done(function() {
		//console.log( "second success" );
		})
		.fail(function() {
		console.log( "error reading: " + url);
		})
		.always(function() {
		//console.log( "complete" );
		});
	return jsonloader;
}

function sendJSON(url,data){
	var jsonloader = $.post( url, data, function() {
		console.log( "success" );
		})
		.done(function() {
		console.log( "second success" );
		})
		.fail(function() {
		console.log( "error" );
		})
		.always(function() {
		console.log( "complete" );
		});
	return jsonloader;
}

function sendForm(name){
	console.log(name);
	//var form = document.forms[name];
	var form = document.getElementById(name);
	console.log(form);
	var url = form.action;
	//http://stackoverflow.com/questions/1255948/post-data-in-json-format-with-javascript
	
	var formdata = {};
	for (var index = 0; index < form.length; index++){
		var input = form[index];
	    if (input.name) {
	    	if (input.getAttribute("data-typelibtypeclass") == "Typelib::NumericType"){
	    		console.log("Typelib::NumericType");
	    		formdata[input.name] = parseFloat(input.value);
	    	}else{
	    		console.log("Typelib::OtherType");
	    		formdata[input.name] = input.value;
	    	}
	    }
	}

	var command = {};
	var json = JSON.stringify(formdata);	
	command["command"] = json;
	
	sendJSON(url,command);
}



//also returns object, not TEXT (mime type from server)
//function loadText(url){
//	var loader = $.get( url, function() {
//		console.log( "success" );
//		})
//		.done(function() {
//		console.log( "second success" );
//		})
//		.fail(function() {
//		console.log( "error" );
//		})
//		.always(function() {
//		console.log( "complete" );
//		});
//	return loader;
//}
