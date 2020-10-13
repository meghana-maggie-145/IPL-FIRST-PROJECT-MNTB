
function matchesWon(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.season;
      const winner = match.winner;
      if (result[season]) {
        if (result[season][winner]) {
          result[season][winner] += 1;
        } else {
          result[season][winner] = 1;
        }
      } else {
        result[season] = { [winner]: 1 };
        // result[season][winner] = 1;
        // console.log(result);
      }
    }
    return result;
  }
    module.exports = matchesWon;
  
    