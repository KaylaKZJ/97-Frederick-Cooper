import { ITenant } from "./types";

export const sortByName = (array: ITenant[]) => {
    let sortedProducts = array.slice().sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })
    return sortedProducts
}