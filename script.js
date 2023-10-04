// api url
const api_url ="https://api.github.com/users/vsbrall143";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {

		// const markup=`<li>${data.name}</li>`;
	

		// document.querySelector('ul').insertAdjacentHTML('beforeend',markup);

	
		let tab =

		`
		<table id="table">
		<tr>
		<th><img id="image" src="https://avatars.githubusercontent.com/u/93755781?v=4"" alt="profile"></img></th>
		
		</tr>
		<tr>
		<th>Name</th>
		<td>${data.name}</td>
		</tr>
		<tr>
		<th>Location</th>
		<td>${data.location}</td>
		</tr>
		<tr>
		<th>profile-URL</th>
		<td>${data.html_url}</td>
		</tr>
		<tr>
		<th>Public-repositories</th>
		<td>${data.public_repos}</td>
		</tr>
		</table>
		<a href="${data.html_url}" >
		<img id="logo" src="logo.png""></img>
		</a>
				`;
	// Loop to access all rows

	// Setting innerHTML as tab variable
	document.getElementById("emp").innerHTML = tab;
}
