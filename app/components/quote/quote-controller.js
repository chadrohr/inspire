(function(){
	//Get your QuoteService
	function QuoteController (){
		var quoteController = new QuoteController

		quoteController.quoteOfTheDay()
			.then(function (data){
				var template = $('#quoteTemplate').html();

				template = template.replace('{{ ??? }}', data.???)
				template = template.replace("{{ ??? }}"), data.???)
			})
	}
	QuoteController()
	
}())
