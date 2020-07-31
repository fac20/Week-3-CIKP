let template = document.querySelector("#cloud-temp");
let addBtn = document.querySelector("#add");
let cloudContainer = document.querySelector("#cloud-container");
let text = document.querySelector("#inputField");

console.log(addBtn);
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

  function addTemplate() {
    const domFragment = template.content.cloneNode(true);
    domFragment.querySelector("#cloud-p").textContent = text.value;

    let bin = domFragment.querySelector("#img__bin");
    bin.addEventListener("click", () => {
        event.target.parentNode.parentNode.remove()
        totalNum -= 1;
        totalCount.textContent = totalNum;
    })
    
    cloudContainer.append(domFragment);
    
  }

  addTemplate();
  cloudContainer.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  text.value = "";

  let checkboxes = cloudContainer.querySelectorAll("input[id=checkbox]");

  checkboxes.forEach((x) =>
    x.addEventListener("click", () => {
      function updateDone() {
        let done = cloudContainer.querySelectorAll("input:checked");
        checkCount.textContent = done.length;
      }

      updateDone();

      if (event.target.checked) {
        event.target.parentNode.parentNode.classList.add("yellow-cloud");
        event.target.parentNode.classList.add("yellow-background");
      }

      if (!event.target.checked) {
        event.target.parentNode.parentNode.classList.remove("yellow-cloud");
        event.target.parentNode.classList.remove("yellow-background");
      }
    })
  );


});
