function showData(data) {
	console.log(data);
	document.querySelector('.fast').textContent = `${data.fast / 10}`;
	document.querySelector('.fastest').textContent = `${data.fastest / 10}`;
	document.querySelector('.low').textContent = `${data.safeLow / 10}`;
	document.querySelector('.fastest_wait').textContent = `${data.fastestWait} s`;
	document.querySelector('.fast_wait').textContent = `${data.fastWait} s`;
	document.querySelector('.low_wait').textContent = `${data.safeLowWait} s`;

}

function handleError(error) {
	// catch any errors
}

fetch('https://ethgasstation.info/api/ethgasAPI.json?api-key=05899f7f63b8c416150fc5803b6da6ed786055ba9dfa0aecaba4c704f49a')
	.then(function (resp) { return resp.json() })
	.then(showData)
	.catch(handleError)