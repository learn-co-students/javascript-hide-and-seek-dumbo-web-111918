function getFirstSelector(selector){
  return document.querySelector(selector)
};

function nestedTarget(id,name){
  return document.querySelector('#nested .target')
};
// target = nested.getElementByClassName("${name}")
//   nested = document.getElementById(id)
//   console.log(nested)
//   console.log(target)

function deepestChild(){
return document.querySelector('#grand-node div div div div')
};



//   node = document.getElementById(id)
//   console.log()
// };document.getElementsByTagName('div')[0]

function increaseRankBy(){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
};

// ????????????/
