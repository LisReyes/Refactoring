class ExplorerService {

    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer)=> explorer.mission === mission);
        return explorerByMission;
    }

    static getAmountOfExplorersByMission(explorers,mission){
        const explorerByMision = ExplorerService.filterByMission(explorers,mission);
        return explorerByMision.length;
    }

    static getExplorersUsernamesByMission(explorers,mission){
        const explorerByMission = ExplorerService.filterByMission(explorers,mission);
        const userNamesByMission = explorerByMission.map((explorer) => explorer.githubUsername);
        return userNamesByMission;
    }
}

module.exports = ExplorerService;