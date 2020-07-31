// Global Variables

// Selects cloud temp ID from HTML using .querySelector
let template = document.querySelector("#cloud-temp");
let addBtn = document.querySelector("#add");
let cloudContainer = document.querySelector("#cloud-container");
let text = document.querySelector("#inputField");
let plusButton = document.querySelector(".addImg");
let sun = document.querySelector("#sunCount");
let checkCount = document.querySelector("#checkedCount");
let totalCount = document.querySelector("#totalCount");

// Variables to log of to do and done 
let checkNum = 0;
let totalNum = 0;

checkCount.textContent = checkNum;

// Add task functions

// Event listener to "listen" for button click and reveal the text input field of the enterTask ID
plusButton.addEventListener("click", () => {
  document.querySelector("#enterTask").classList.toggle("hidden");
});

// Will not allow an empty input field to be added as a "to do cloud"
addBtn.addEventListener("click", () => {
  if (text.value === "") {
    return;
}

  totalNum += 1;
  totalCount.textContent = totalNum;

  // Using document fragment and cloneNode allows us to clone template "cloud"
    const domFragment = template.content.cloneNode(true);

  // Input user text to the text value
    domFragment.querySelector("#cloud-p").textContent = text.value;

    let bin = domFragment.querySelector("#img__bin");
    bin.addEventListener("click", () => {
  // Doubles parentNode because bin is inside text element, and text element is inside cloud
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
      }

      if (!event.target.checked) {
        event.target.parentNode.parentNode.classList.remove("green-cloud");
        event.target.parentNode.classList.remove("green-background");
      }
    })
  );


});
