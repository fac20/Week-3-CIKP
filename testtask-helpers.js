function test(name, testFunction) {
    function equal(x, y, message = `Expected ${x} to equal ${y}`) {
      if (x === y) {
        console.info("Pass: " + message);
      } else {
        console.error("Fail: " + message);
      }
    }
  
    function notEqual(x, y, message = `Expected ${x} not to equal ${y}`) {
      if (x !== y) {
        console.info("Pass: " + message);
      } else {
        console.error("Fail: " + message);
      }
    }
  
    const assertions = {
      equal,
      notEqual,
    };
  
    console.group(name);
    testFunction(assertions);
    console.groupEnd(name);
  }

function reset() {
  checkCount.textContent = "0";
  totalCount.textContent = "0";
        totalNum = 0;
        while (cloudContainer.firstChild) {
        cloudContainer.removeChild(cloudContainer.firstChild);
        }
}