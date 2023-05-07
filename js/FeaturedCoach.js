const featureCoach = [
    {
        name: "Mikel Arteta",
        image: "arteta.png",
        country: "Spain",
        flag: 'flag_spain.png',
        club: "Arsenal",
        logo: 't3@x2.png',
        matchs: 102,
        wins: 54,
        draws: 16,
        losses: 32,

    },
]
function RenderFeaturedCoach() {
    const featuredCoachElement = $(".featured-section .featured-coach");
    const html = featureCoach.map((player, index) => {
        return `
        <div class="featured">
            <div class="featured-header">
                <strong>Featured Coach</strong>
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
                    <span>Matches</span>
                    <strong>${player.matchs}</strong>
                </div>
                <div class="stat-item">
                    <span>Wins</span>
                    <strong>${player.wins}</strong>
                </div>
                <div class="stat-item">
                    <span>Draws</span>
                    <strong>${player.draws}</strong>
                </div>
                <div class="stat-item">
                    <span>Losses</span>
                    <strong>${player.losses}</strong>
                </div>
            </div>

        </div>
        `
    })
    const htmls = html.join('');
    featuredCoachElement.innerHTML = htmls;
}
RenderFeaturedCoach();