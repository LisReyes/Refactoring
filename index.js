const Reader = require ("./../fizzbuz/lib/utils/Reader");
const ExplorerService = require ("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");
const explorers = Reader.readJsonFile("explorer.json");
// console.log(explorers);
// console.log(ExplorerService.filterByMission(explorers,"node"));
// console.log(ExplorerService.getAmountOfExplorersByMission(explorers,"node"));
// console.log(ExplorerService.getExplorersUsernamesByMission(explorers,"node"));

const explorer1 = {name: "Explorer1", score: 15}
console.log(FizzbuzzService.appliValidationInExplorer(explorer1));