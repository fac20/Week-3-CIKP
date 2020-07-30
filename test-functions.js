// Is the a redundant test?
    test("Is the template element selected?", t => {
        const result = template;
        const expected = document.querySelector('#cloud-temp');
        t.equal(result.id, expected.id);
    })

    test("Is the add button element selected?", t => {
        const result = addBtn;
        const expected = document.querySelector('#add');
        t.equal(result.id, expected.id);
    })

    test("Has another cloud been added to total?", t => {
        text.value = "new test";
        addBtn.click();
        const result = totalCount.textContent
        const expected = "1";
        t.equal(result, expected);
        // resets dom state 
        totalCount.textContent = "0";
        totalNum = 0;
        cloudContainer.removeChild(cloudContainer.firstChild);
        })

    test("Has a second cloud been added to total?", t => {
        text.value = "new test";
        addBtn.click();
        text.value = "new test";
        addBtn.click();
        const result = totalCount.textContent
        const expected = "2";
        t.equal(result, expected);
        // resets dom state 
        totalCount.textContent = "0";
        totalNum = 0;
        while (cloudContainer.firstChild) {
        cloudContainer.removeChild(cloudContainer.firstChild);
    }
    })

    test("Is cloud-container selected?", t => {
        const result = cloudContainer;
        const expected = document.querySelector('#cloud-container');
        t.equal(result.id, expected.id);
    })
  

    test("Is text correctly appended to cloud?", t => {
        text.value = "new test";
        let startingText = text.value
        addBtn.click();
        const result = document.querySelector("#cloud-p").textContent;
        const expected = startingText;
        console.log(result, expected);
        t.equal(result, expected);
        // reset
        totalCount.textContent = "0";
        totalNum = 0;
        while (cloudContainer.firstChild) {
        cloudContainer.removeChild(cloudContainer.firstChild);
        }
    })
    test("is number of checked tasks equal to number of tasks ", t => {
        const result = checkCount.value;
        const expected = totalCount.value;
        t.equal(result, expected);
    })


