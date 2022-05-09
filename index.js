const Reader = require ("./../fizzbuz/lib/utils/Reader");
const ExplorerService = require ("./lib/services/ExplorerService");
const explorers = Reader.readJsonFile("explorer.json");
// console.log(explorers);
console.log(ExplorerService.filterByMission(explorers,"node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers,"node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers,"node"));