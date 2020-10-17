document.getElementById('nameSubmit').addEventListener("click", function(event) {
	event.preventDefault();
	const value = document.getElementById('nameEntry').value;
	if (value ===""){
		return;
	}
	const url = "https://api.agify.io?name="+value;
	fetch(url)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			console.log(json);
			let results = "";
			results += '<div class="results">';
			if (json.age === null){
				results += "<h3>I couldn't find that name! Sorry!";
			} else {
				results += "<h2>You are ";
				results += json.age.toString(10);
				results += " years old!</h2></div>";
				results += '<div class="results">';
				results += "<h3>"
				if (json.age < 6){
					results += "You are a tiny bean.";
				} else if (json.age < 13){
					results += "You are growing tall, little sprout.";
				} else if (json.age < 18){
					results += "Oh no--you're a teenager!";
				} else if (json.age < 25){
					results += "I guess you're an adult, but not to car insurance!";
				} else if (json.age < 30){
					results += "You still think you're cool, don't you?";
				} else if (json.age < 36){
					results += "You're not old. Your back just hurts cause you slept bad.";
				} else if (json.age < 40){
					results += "Not 40 yet!";
				} else if (json.age < 47){
					results += "If you haven't started your midlife crisis yet, you should probably get going on it.";
				} else if (json.age < 50){
					results += "You aren't old till you're 50.";
				} else if (json.age < 60){
					results += "50 is the new 40.";
				} else if (json.age < 65){
					results += "Just a couple more years till retirement! But you aren't old. You're <em>choosing</em> to retire.";
				} else if (json.age < 70){
					results += "Your knees hurt? It's ok. Beauty is pain. You've still got some teeth left, right?";
				} else if (json.age < 80){
					results += "How do you spell \"septuagenarian\"?";
				} else if (json.age < 90){
					results += "90 is the new 70.";
				} else if (json.age < 100){
					results += "Mad respect, yo. Keep on truckin'.";
				} else {
					results += "Pandemic? Been there, done that.";
				}
			}
			results += "</h3></div>";
			document.getElementById('nameResults').innerHTML = results;
		});
});
