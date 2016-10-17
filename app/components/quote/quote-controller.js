(function(){
	//Get your QuoteService
	
		var quote = new QuoteService()

		quote.getQuote(drawQuote)
	
	 function drawQuote(data){
        quoteElem = $('#quote');
      //  var data = JSON.parse(data)
        var template = `<h3>${data.quote}</h3>
											<p class="hiden" id="author">${data.author}</p>`
        quoteElem.append(template)
		//console.log(data)
		$("#quote").mouseenter(function(){
			$("#author").css("visibility","visible")
		
		})

			$("#quote").mouseleave(function(){
			$("#author").css("visibility","hidden")

		})
    }		
		

		
	

	
}())
