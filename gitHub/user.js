const forms = document.querySelector('#formu');
const bars = document.querySelector('#searchUser');

window.addEventListener('load', () => {
	forms.addEventListener('submit', buscarUser);

})


function buscarUser(e) {
	e.preventDefault();


	cargarUser(bars)
}
const cargarUser = async () => {
	
	try {
		const respuesta = await fetch(`https://api.github.com/users/${bars.value}`);

		const datos = await respuesta.json();
		console.log(datos);
		let {avatar_url, login, id, created_at, public_repos, events_url, updated_at, followers, following, url,  } = datos;

		const events = await fetch(`https://api.github.com/users/${bars.value}/events`);

		const eventsData = await events.json();
		eventMap = eventsData.map(t => `${t.type}`)
		console.log(eventMap.length);

		if (respuesta.status === 200) {
			let  userData =  `
			<div class="userInfo">
			<div class="img_container">
            <img class="avatar" src="${avatar_url}" alt="user avatar">
            </div>
			<h3 class="e"> <strong> Id: </strong> ${id}</h3>
			<h3 class="e"> <strong> Name: </strong> ${login}</h3>
			<p class="e"> <strong> Repos </strong> ${public_repos}</p>
			<p class="e"> <strong> Created:  </strong> ${created_at}</p>
			<p class="e"> <strong> Updated at: </strong> ${updated_at}</p>
			<p class="e"> <strong> Followers:  </strong> ${followers}</p>
			<p class="e"> <strong> Updated at: </strong> ${following}</p>
			<a href="${url}" class="e"> Url github </a>
			<p class="e"> <strong> Repos </strong> ${public_repos}</p>
			<a href="${events_url}" class="e"> Events User   total: ${eventMap.length} ></a> 
			</div>
			`
	
			console.log(userData);

		 document.getElementById('contenedorUser').innerHTML = userData;

		}
	

	}catch(error){
		console.log(error);
	}
}

cargarUser();