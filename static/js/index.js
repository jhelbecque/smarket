function inscription() {
	var pseudo = document.getElementById('pseudo').value;
	var nom = document.getElementById('nom').value;
	var prenom = document.getElementById('prenom').value;
	var age = document.getElementById('age').value;
	var infos = document.getElementById('infos').value;

	var data = {
		pseudo : pseudo,
		nom : nom,
		prenom : prenom,
		age : age,
		infos : infos
	}

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'ajax_inscription/');
	xhr.send(data);

	xhr.onload = function() {
    	if (xhr.status === 200) {
        	alert('Something went wrong.  Name is now ');
    	}
    	else if (xhr.status !== 200) {
        	alert('Request failed.  Returned status of ' + xhr.status);
    	}
	};
}
