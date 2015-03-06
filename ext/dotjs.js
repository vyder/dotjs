var server = "https://localhost:3131/";
var resourceURL = server + location.hostname.replace(/^www\./,'')+'.js';
try {
	$.ajax({
	  url: server + location.hostname.replace(/^www\./,'')+'.js',
	  dataType: 'text',
	  success: function(d){
	    $(function(){ eval(d) })
	  },
	  error: function(){
	    console.log("Can't connect to server at: " + server);
	    console.log("Try accepting the SSL certificate.");
	  }
	})
} catch(e) {
	console.log("Couldn't load dotjs resource: " + resourceURL);
}