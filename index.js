let template = document.querySelector("#cloud-temp");
let addBtn = document.querySelector("#add");
let cloudContainer = document.querySelector("#cloud-container");
let text = document.querySelector("#inputField");

let plusButton = document.querySelector(".addImg");

plusButton.addEventListener("click", () => {
  document.querySelector("#enterTask").classList.toggle("hidden");
});

let sun = document.querySelector("#sunCount");
let checkCount = document.querySelector("#checkedCount");
let totalCount = document.querySelector("#totalCount");

let checkNum = 0;
let totalNum = 0;

checkCount.textContent = checkNum;

addBtn.addEventListener("click", () => {
  if (text.value === "") {
    return;
}

  totalNum += 1;

  totalCount.textContent = totalNum;

    const domFragment = template.content.cloneNode(true);
    domFragment.querySelector("#cloud-p").textContent = text.value;

    let bin = domFragment.querySelector("#img__bin");
    bin.addEventListener("click", () => {
        event.target.parentNode.parentNode.remove()
        totalNum -= 1;
        totalCount.textContent = totalNum;
    })
    
    cloudContainer.append(domFragment);    


  text.value = "";

  let checkboxes = cloudContainer.querySelectorAll("input[id=checkbox]");

  checkboxes.forEach((x) =>
    x.addEventListener("click", () => {
        let done = cloudContainer.querySelectorAll("input:checked");
        checkCount.textContent = done.length;
   

      if (event.target.checked) {
        event.target.parentNode.parentNode.classList.add("green-cloud");
        event.target.parentNode.classList.add("green-background");
        console.log("ya checked t");
      }

      if (!event.target.checked) {
        event.target.parentNode.parentNode.classList.remove("green-cloud");
        event.target.parentNode.classList.remove("green-background");
      }
    })
  );


});
