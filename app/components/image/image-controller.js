(function(){
	
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var image = new ImageService()

		image.getImage(function(data){
			
				//console.log(data)
				var template =`
				<style>#body{
					background-image:url('${data.url}');
					background-size: cover;
				}</style>
				`
				$('#body').append(template);
			
		})
}())


