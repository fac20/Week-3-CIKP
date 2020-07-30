let template = document.querySelector('#cloud-temp');
let addBtn = document.querySelector('#add');
let cloudContainer = document.querySelector("#cloud-container")
let text = document.querySelector('#inputField');
console.log(addBtn);

let sun = document.querySelector('#sunCount');
let checkCount = document.querySelector('#checkedCount');
let totalCount = document.querySelector('#totalCount');

let checkNum=0;
let totalNum=0;

checkCount.textContent = checkNum;

addBtn.addEventListener('click',() => {

   
    if(text.value === ''){return;}
    
    totalNum += 1;   
   
    // checkCount.textContent = checkNum;
    totalCount.textContent = totalNum;
 
   //console.log(checkNum);
   function addTemplate (){
       const domFragment = template.content.cloneNode(true);
       domFragment.querySelector("#cloud-p").textContent = text.value
       
       cloudContainer.append(domFragment); 
    }
    
    addTemplate();
    text.value = "";
    //let done = cloudContainer.getElementsByClassName(".checkbox");

    /*
    let checkboxes = cloudContainer.querySelectorAll("input[id=checkbox]")
    checkbox.addEventListener ('click', event => {
        if (event.target.checked){
            //checkNum.textContent = done.length;
            checkNum+= 1;
        // console.log(done);
    }*/
         
let checkboxes = cloudContainer.querySelectorAll("input[id=checkbox]");

checkboxes.forEach( x => x.addEventListener('click', () => {

    function updateDone() {
        let done = cloudContainer.querySelectorAll("input:checked");
        checkCount.textContent = done.length;
    }

    updateDone();
}
));
});













