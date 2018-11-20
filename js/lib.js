//https://stackoverflow.com/questions/49889110/js-news-api-promise-not-able-to-fetch-certain-values
function getNews (StPais, ItPagina) {	
	var url = 'https://newsapi.org/v2/top-headlines?' +
    	'country='+ StPais + '&page=' + ItPagina + '&pageSize=5' +
    	'&apiKey=9fb3a36cd9b345d9b1b2362a30efa8bf';	
	// var url = 'https://newsapi.org/v2/sources?language='+StPais+'&apiKey=9fb3a36cd9b345d9b1b2362a30efa8bf';	
	var req = new Request(url);
	  console.log(req)
	  fetch(req)
	    .then(resp => resp.json())	    
	    // Make sure to return articles from this function after logging it
	    .then(({articles}) => {	    	
	    	//console.log(articles);
	    	estruturaNoticias(articles, ItPagina);	    	
	    })
}

function estruturaNoticias(response, ItPagina) {	
	
	var Estrutura = "<br />";
	var j = 0;
	
	response.map(formataCampos);
	console.log(response);
	
	for (i = 0; i < 2; i++) {		
		if (i == 0/* || i == 2*/) {
			/*if (i ==2)
				j++;*/
			Estrutura += "<div class=\"row\">" 
			+"<div class=\"col-sm-6\">" +
				"<div class=\"card\" >" +
				"<a href=\""+ response[j].url +"\" target=\"blank\" style=\"text-decoration:none\">" +
				"<img src=\""+ response[j].urlToImage +"\" width=\"\" height=\"250px\" class=\"img-fluid\" />" +
				"<div class=\"card-body text-center\"> <p class=\"text-center\"> "+ response[j].publishedAt +"</p> <h5 class=card-title> "+ response[j].title +" </h5> <p class=card-text>"+ 
				 response[j].description +""+ response[j].author + "</p></div>" +
				"</a></div> " +
			"</div>";
			j++;			
			Estrutura += " <div class=\"col-sm-6\">	" +
				"<div class=\"card\" >" +
				"<a href=\""+ response[j].url +"\" target=\"blank\" style=\"text-decoration:none\">" +
				"<img src=\""+ response[j].urlToImage +"\" width=\"\" height=\"250px\"  class=\"img-fluid\" />" +
				"<div class=\"card-body text-center\"> <p class=\"text-center\"> "+ response[j].publishedAt +"</p> <h5 class=card-title> "+ response[j].title +" </h5> <p class=card-text>"+ 
				response[j].description +""+ response[j].author + "</p></div>" +
				"</a></div> " +
			"</div>" +
			"</div> <br />";		
		} else {
			j++;
			Estrutura += "<div class=\"row\">" 
				+"<div class=\"col-sm-4\">" +
					"<div class=\"card\" >" +
					"<a href=\""+ response[j].url +"\" target=\"blank\" style=\"text-decoration:none\">" +
					"<img src=\""+ response[j].urlToImage +"\" width=\"\" height=\"250px\" class=\"img-fluid\" />" +
					"<div class=\"card-body text-center\"> <p class=text-center> "+ response[j].publishedAt +"</p> <h5 class=card-title> "+ response[j].title +" </h5> <p class=card-text>"+ 
					 response[j].description +""+ response[j].author + "</p></div>" +
					"</a></div> " +
				"</div>";
			j++;
			Estrutura += "" 
				+"<div class=\"col-sm-4\">" +
					"<div class=\"card\" >" +
					"<a href=\""+ response[j].url +"\" target=\"blank\ style=\"text-decoration:none\">" +
					"<img src=\""+ response[j].urlToImage +"\" width=\"\" height=\"250px\" class=\"img-fluid\" />" +
					"<div class=\"card-body text-center\"> <p class=text-center> "+ response[j].publishedAt +"</p> <h5 class=card-title> "+ response[j].title +" </h5> <p class=card-text>"+ 
					 response[j].description + " "+ response[j].author + "</p></div></a>" +
					"</a></div> " +
				"</div>";
			j++;
			Estrutura += "" 
				+"<div class=\"col-sm-4\">" +
					"<div class=\"card\" >" +
					"<a href=\""+ response[j].url +"\" target=\"blank\" style=\"text-decoration:none\">" +
					"<img src=\""+ response[j].urlToImage +"\"  width=\"\" height=\"250px\" class=\"img-fluid\" />" +
					"<div class=\"card-body text-center\"> <p class=text-center> "+ response[j].publishedAt +"</p> <h5 class=card-title> "+ response[j].title +" </h5> <p class=card-text>"+ 
					 response[j].description + " "+ response[j].author + "</p></div>" +
					"</a></div> " +
				"</div> </div> <br />";
		}
	}
	
	$('#noticias').html(Estrutura);	
	
}

function formataCampos(item, index) {
	
	if (item.description !== null)
		item.description = item.description;
	else
		item.description = "";
	if (item.description !== null)
		item.description = item.description;
	else
		item.description = "";	
	var data =  new Date(item.publishedAt);	
	item.publishedAt = data.getDate()+ " /" + data.getMonth() + "/ "+ data.getFullYear() ;
	
	if (item.urlToImage === null) 
		item.urlToImage = 'https://dummyimage.com/538x250/eeecef/eeecef';	
	if (item.author === null)
		item.author = ""
	else
		item.author = "<br /> <b class=\"text-center\">Por: "+ item.author + "</b>";
}

function descricaoVazia(item, index) {	
	if (item.description !== null)
		item.description = item.description;
	else
		item.description = "";
}

function dataFormata(item, index) {	
	var data =  new Date(item.publishedAt);	
	item.publishedAt = data.getDate()+ " /" + data.getMonth() + "/ "+ data.getFullYear();
}

function imagemVazia(item, index) {	
	if (item.urlToImage === null) 
		item.urlToImage = 'https://dummyimage.com/348x250/eeecef/eeecef';	
}

function autorVazia(item, index) {
	if (item.author === null)
		item.author = ""
	else
		item.author = "<br /> <b class=\"text-center\">Por: "+ item.author + "</b>";
}

function fecharMenuNav() {
	  $("#navbarNavAltMarkup").removeClass("show");
	  document.getElementById("btnfechar").style.visibility = "hidden";
}

function abrirMenuNav() {
	//$("#navbarNavAltMarkup").addClass("show");
	//document.getElementById("navbarNavAltMarkup").style.visibility = "visible";	
	document.getElementById("btnfechar").style.visibility = "visible";
}