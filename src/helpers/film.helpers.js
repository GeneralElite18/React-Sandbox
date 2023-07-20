

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