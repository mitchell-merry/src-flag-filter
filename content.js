/*
 * Filters a Speedrun.com leaderboard by country flag.
 * 
 * @author Mitchell "diggity" Merry
 */

// should be temporary - Classes and IdS
const CIS = {
    lb_table: "primary-leaderboard",
    lb_row: "leaderboard-row",
    lb_username: 'link-username',
    lb_rank: 'leaderboard-rank',
    hidden: 'hidden',
};

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request) => {
    if(request.action !== "filter") return;
    const { country } = request;

    let lb_table = document.getElementById(CIS.lb_table);

    // If the page has a leaderboard (and it is loaded):
    if(lb_table) {

        // Get the rows of the board.
        let lb_rows = lb_table.getElementsByTagName('tbody')[0].getElementsByClassName(CIS.lb_row);

        // For every row...
        for(let i = 0, place = 1; i < lb_rows.length; i++) {
            const lb_row = lb_rows[i];

            // Ignore rows with non-accounts for now - they can have flags, but this is a proof of concept.
            let username = lb_row.getElementsByTagName('td')[1].getElementsByClassName(CIS.lb_username)[0];
            let rank = lb_row.getElementsByClassName(CIS.lb_rank)[0];

            // if (passes filter)
            if(country === "" || username?.children?.[0].dataset.originalTitle === country) {
                rank.textContent = `${place}`;
                if(country !== "") rank.textContent += ` (${i+1})`;

                lb_row.classList.remove(CIS.hidden);
                place++;
            } else {
                lb_row.classList.add(CIS.hidden);
            }
        }
    } else {
        // TODO respond with "There is no leaderboard on this page. Either visit a page with a leaderboard or wait for the table to load, and try again."
    }
});