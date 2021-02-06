//Question 2
//Answer..

const url =
	"https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

const createHTML = (results) => {
	const dataLoops = results;
	resultsContainer.innerHTML = "";

	for (let i = 0; i < dataLoops.length; i++) {
		if (i === 8) {
			break;
		}
		resultsContainer.innerHTML += `<div class = "result"> <p>Name: ${dataLoops[i].name}</p>
		<p>Rating: ${dataLoops[i].rating}</p>
		<p>Amount of tags: ${dataLoops[i].tags.length}</p>
		</div>`;
	}
};

async function getGames() {
	try {
		const response = await fetch(url);
		const results = await response.json();
		const dataLoops = results.results;
		createHTML(dataLoops);
	} catch (error) {
		resultsContainer.innerHTML = displayError(
			"An error occurred when calling the API"
		);
	}
}

getGames();
