function edenGardensmatches(matches){
    const result = {};
    for(let match of matches){ 
      const venue = match.venue;
      const winner = match.winner;
      if(venue == 'Eden Gardens'){  
          if(result[winner])
          {
              result[winner] +=1;
          }
          else
          {
            result[winner] =1;
          }
      }
}
 return (result);
}

module.exports = edenGardensmatches;