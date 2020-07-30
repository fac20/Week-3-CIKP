// Is the a redundant test?
test("Is the template element selected?", (t) => {
  const result = template;
  const expected = document.querySelector("#cloud-temp");
  t.equal(result.id, expected.id);
});

test("Is the add button element selected?", (t) => {
  const result = addBtn;
  const expected = document.querySelector("#add");
  t.equal(result.id, expected.id);
});

test("Has another cloud been added to total?", (t) => {
  text.value = "new test";
  addBtn.click();
  const result = totalCount.textContent;
  const expected = "1";
  t.equal(result, expected);
  // resets dom state
  reset();
});

test("Has a second cloud been added to total?", (t) => {
  text.value = "new test";
  addBtn.click();
  text.value = "new test";
  addBtn.click();
  const result = totalCount.textContent;
  const expected = "2";
  t.equal(result, expected);
  reset();
});

test("Is cloud-container selected?", (t) => {
  const result = cloudContainer;
  const expected = document.querySelector("#cloud-container");
  t.equal(result.id, expected.id);
});

test("Is text correctly appended to cloud?", (t) => {
  text.value = "new test";
  let startingText = text.value;
  addBtn.click();
  const result = document.querySelector("#cloud-p").textContent;
  const expected = startingText;
  console.log(result, expected);
  t.equal(result, expected);
  reset();
});

test("Does completed tasks increase by 1 after checking task off ", (t) => {
  text.value = "new test";
  addBtn.click();
  document.querySelector("input[id=checkbox]").click();
  const result = checkCount.textContent;
  const expected = "1";
  t.equal(result, expected);
  reset();
});
