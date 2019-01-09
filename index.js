function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

// function increaseRankBy(n) {
//   const rankedLists = document.querySelectorAll(".ranked-list")
//   rankedLists.forEach(ulClass => {
//     const {children} = ulClass
//     console.log(children)
//     for (var i = 0; i < children.length; i++) {
//       console.log(children[i])
//       console.log(children[i].innerText)
//     }
//   })
// }


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
