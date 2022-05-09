const ExplorerService = require ("./../../../lib/services/ExplorerService")

describe(" Tests para ExplorerService ", () =>{
    test (" Requerimiento 1: Calcular todos los explorers que tiene como mision Node", () =>{
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers,"node");
        expect(explorersInNode.length).toBe(1);
    })

})