const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWon = require("./ipl/matchesWon");
const extraRunsConceded = require("./ipl/extraRunsConceded");
const economicRate = require("./ipl/economicRate");   
const eden_gardens_matches = require("./ipl/EdenGardenMatchesWon");





const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";


const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_won = "./public/data_won.json";
const JSON_OUTPUT_FILE_PATH_extraRuns = "./public/data_extraRuns.json";
const JSON_OUTPUT_FILE_PATH_economicRate = "./public/data_economicRate.json";
const JSON_OUTPUT_FILE_PATH_data_eden_garden_won = "./public/data_eden_garden_won.json";








function main_1() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      // console.log(matchesPlayedPerYear)
      let result_played= matchesPlayedPerYear(matches);
      // let result_won = matchesWon(matches);

      saveMatchesPlayedPerYear(result_played);
      // saveMatchesWon(result_won);

    });
}
main_1();
function saveMatchesPlayedPerYear(result_played) {
  const jsonData = {
    matchesPlayedPerYear: result_played
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
main_1();


function main_2() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      // console.log(matchesPlayedPerYear)
      let result_won = matchesWon(matches);
      saveMatchesWon(result_won);

    });
}
main_2();

function saveMatchesWon(result_won) {
  const jsonData = {
    matchesWon: result_won
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_won, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main_2();






function main_3() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          // console.log(deliveries[0], "delivery");
          // console.log(matches[0], "match")
          let result_extraRuns = extraRunsConceded(matches,deliveries);
          saveextraRunsConceded_a(result_extraRuns);

        });
    });
}
main_3();





function saveextraRunsConceded_a(result_extraRuns){
  const jsonData = {
  extraRunsConceded: result_extraRuns
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_extraRuns, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main_3();














function main_4() {
  csv()
     .fromFile(MATCHES_FILE_PATH)
   .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          // console.log(deliveries.slice(0,10),"deliverires");
          // console.log(matches.slice(0,5),"matches");
          let result_4 = economicRate(matches,deliveries);// ippudu result lo save ayyi untundhi adhi console.log print cheyyali
          // console.log(result_1);
          // let result_1 = matchesPlayedPerYear(deliveries)
         saveeconomicRate(result_4);
          // // saveMatchesPlayedPerYear_b(result_2);

        });
    });
}
main_4();





function saveeconomicRate(result_4){
  const jsonData = {
    economicRate1 : result_4 
  }
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_economicRate, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }  
  }); 
}

main_4();













function main_5() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
           let result_5 = eden_gardens_matches(matches);
          saveeden_gardens_matches(result_5);

        });
}
main_5();





function saveeden_gardens_matches(result_5){  
  const jsonData = {
    edenGardensmatches: result_5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_data_eden_garden_won, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main_5();





























