function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n) {
  let lis = Array.from(document.querySelectorAll(".ranked-list li"));
  lis.forEach(function (li) {
    console.log(li);
    li.innerHTML = parseInt(li.innerHTML) + n;
  });
}

function deepestChild() {
  let nodes = Array.from(document.querySelectorAll("#grand-node div"));
  return nodes[nodes.length - 1];
}

deepestChild();