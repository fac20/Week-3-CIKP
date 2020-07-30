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

addBtn.addEventListener('click',() => {
    if(text.value === ''){return;}
    totalNum += 1;   
   
checkCount.textContent = checkNum;
    totalCount.textContent = totalNum;
 
   console.log(checkNum);
   function addTemplate (){
       const domFragment = template.content.cloneNode(true);
       domFragment.querySelector("#cloud-p").textContent = text.value
       
       cloudContainer.append(domFragment); 
    }
    
    addTemplate();
    text.value = "";
    let done = cloudContainer.getElementsByClassName(".checkbox");
    let checkbox = cloudContainer.querySelector("input[id=checkbox]")
    checkbox.addEventListener ('click', event => {
        if (event.target.checked){
            checkNum.textContent = done.length;
            checkNum+= 1;
        // console.log(done);
    }
         
    

}  )
})




/*select all checkboxes in cloud container

//loop over this list and add event listeners to each one 

//in this listener, run update Done

//let checkboxes = cloudContainer.querySelectorAll("input[id=checkbox]")
//checkboxes.forEach(addEventListener('click', () => {

        function updateDone() {
        let done =.querySelectorAll("input:checked");
        checkCount.textContent = done.length;
    }
    updateDone();

}));
    
//

}

*/









