import { clubsList } from "./header.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function handleRenderRankTable() {
    console.log(clubsList)
    const tableBodyElement = $('.rank-table-content .table-body');
    const html = clubsList.map((club, index) => {
        return `
        <tr>
            <th class="position" scope="row">
                <span>${index + 1}</span>
                <span class="movement ${club.movement}"></span>
            </th>
            <td class="rank-table-club">
                <p>
                    <img class="rank-logo-team" src='./assets/images/logo_team/${club.logo}' alt="${club.name}" />
                    <strong class="rank-name-team">${(club.short_name ? club.short_name : club.name)}</strong>
                </p>
            </td>
            <td class="rank-table-pl">${club.played}</td>
            <td class="rank-table-gd">${(club.goal_difference >= 0) ? `+${club.goal_difference}` : club.goal_difference }</td>
            <td class="rank-table-pts">${club.points}</td>
        </tr>
        `
    })
    const htmls = html.join('');
    tableBodyElement.innerHTML = htmls;
}
handleRenderRankTable();
