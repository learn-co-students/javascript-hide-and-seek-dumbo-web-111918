
function getFirstSelector(selector) {
//which accepts a selector and returns the first element that matches.
let firstMatch = document.querySelector(selector)    
    return firstMatch; 
}

function nestedTarget () {
    let findMatch = document.querySelector('#nested .target');
    return findMatch;
}


function deepestChild () {
    let findMatch = document.querySelector('#grand-node div div div div');
    return findMatch;
}
//review this 
function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list');

    for (let i = 0; i < rankedLists.length; i++) {
        let children = rankedLists[i].children;

        for (let j = 0; j < children.length; j++) {
            children[j].innerHTML = parseInt(children[j].innerHTML) + n;
        }
    }

}