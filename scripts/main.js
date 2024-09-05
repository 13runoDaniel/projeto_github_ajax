document.addEventListener('DOMContentLoaded', function () {
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repository = document.querySelector('#repository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const github = document.querySelector('#github');
    const endpoint = 'https://api.github.com/users/13runoDaniel';

    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            name.innerText = json.name;
            username.innerText = json.login;
            avatar.src = json.avatar_url;
            repository.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            github.href = json.html_url;
        })
        .catch(function (error) {
            alert('Ocorreu um erro ao buscar informações do perfil');
        })
        .finally(function () {
            console.log('Finalizado');
        });
});
