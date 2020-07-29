

let sun = document.querySelector('#sunCount');
let checkCount = document.querySelector('#checkedCount');
let totalCount = document.querySelector('#totalCount');

function showProgress(){
    let checkNum=0;
    let totalNum=0;
    
    checkCount.textContent = checkNum;
    totalCount.textContent = totalNum;
}

showProgress();