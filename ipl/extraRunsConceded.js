


function extraRunsConceded(matches,deliveries) {
    const result ={};
  for (let match of matches) {
   const season = parseInt(match.season);
   if (season == 2016) {
     const id = match.id;
     const team1 = match.team1;
     const team2 = match.team2;
     for (let deliver of deliveries) {
       const match_id = deliver.match_id;
       if (id == match_id) {
         // console.log(deliver);
         const bowlingteam = deliver.bowling_team;
         const extra_runs = parseInt(deliver.extra_runs);
         if (team1 == bowlingteam || team2 == bowlingteam) {
           if (result[bowlingteam]) {
             result[bowlingteam] += extra_runs;
           } else {
             result[bowlingteam] = extra_runs;
           }
         }
       }
     }
   }
  }
  return (result);
  }
  
  module.exports = extraRunsConceded;
  