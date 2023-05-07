const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const featuredPlayers = [
    {
        name: "Harry Kane",
        image: "harrykane.png",
        country: "England",
        flag: 'flag_england.png',
        club: "Tottenham Hotspur",
        logo: 't6@x2.png',
        appearance: 288,
        goals: 188,
        assists: 43,
        shots: 1071,
    },
    {
        name: "Allan Saint-Maximin",
        image: "maximin.png",
        country: "France",
        flag: 'flag_france.png',
        club: "Newcastle United",
        logo: 't4@x2.png',
        appearance: 90,
        goals: 12,
        assists: 15,
        shots: 152

    },
    {
        name: "Aleksandar Mitrovic",
        image: "mitrovic.png",
        country: "Serbia",
        flag: 'flag_serbia.png',
        club: "Fullham",
        logo: 't54@x2.png',
        appearance: 110,
        goals: 30,
        assists: 10,
        shots: 300

    }

]
function RenderFeaturePlayer() {
    const featuredPlayersElement = $(".featured-section .featured-players");
    const html = featuredPlayers.map((player, index) => {
        return `
        <div class="featured">
            <div class="featured-header">
                <strong>Featured Player</strong>
            </div>

            <div class="player">
                <div class="player-info">
                    <strong>${player.name}</strong>
                    <p>
                       <img class="flag-img" src="./assets/images/featured_player/${player.flag}" alt="" />
                       <span>${player.country}</span>
                    </p>
                </div>
                <div class="player-img">
                    <img src="./assets/images/featured_player/${player.image}" alt="" />
                </div>
            </div>

            <div class="stats">
                <div class="club stat-item">
                    <span>Club</span>
                    <p>
                        <strong>${player.club}</strong>
                        <img src="./assets/images/logo_team/${player.logo}" alt="" />
                    </p>
                </div>
                <div class="stat-item">
                    <span>Appearances</span>
                    <strong>${player.appearance}</strong>
                </div>
                <div class="stat-item">
                    <span>Goals</span>
                    <strong>${player.goals}</strong>
                </div>
                <div class="stat-item">
                    <span>Assists</span>
                    <strong>${player.assists}</strong>
                </div>
                <div class="stat-item">
                    <span>Shots</span>
                    <strong>${player.shots}</strong>
                </div>
            </div>

        </div>
        `
    })
    const htmls = html.join('');
    featuredPlayersElement.innerHTML = htmls;
}
RenderFeaturePlayer();