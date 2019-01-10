function getFirstSelector(selector) {
    let selected = document.querySelector(selector);
    return selected;
};

function nestedTarget() {
    let nested = document.querySelector("#nested .target");
    return nested;
};

function deepestChild() {
    let myDiv = document.getElementById("grand-node").querySelectorAll("div");
    return (myDiv[myDiv.length - 1 ]);
};
deepestChild();

function increaseRankBy(n) {
    let ranked = document.querySelectorAll(".ranked-list li");
    for (let i = 0; i < ranked.length; i++) {
        console.log(ranked[i].innerText);
        ranked[i].innerText = (parseInt(ranked[i].innerText)+ n);
    }
        
    
};
increaseRankBy(4);

getFirstSelector("div");