

export function filterFilmsByDirector(list, director){
    if(director == ""){
        return list;
    }
    let filteredList = list.filter((element) => {
        return (element.director == director)
    })
    return filteredList;
}

export function getListOf(list, prop){
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        const item = list[i][prop];
        if(!newList.includes(item)){
            newList.push(item);
        }
    }
    return newList;
}

export function getFilmStats(list){
    let stats = {
        acc_score: 0,
        avg_score: 0,
        total: 0,
        latest: 0
    }
    for(let i = 0; i < list.length; i++){
        stats.acc_score += parseInt(list[i].rt_score);
        stats.total++;
        if(list[i].release_date > stats.latest){
            stats.latest = list[i].release_date;
        }
    }
    stats.avg_score = Math.floor(stats.acc_score / list.length);
    return stats;
}