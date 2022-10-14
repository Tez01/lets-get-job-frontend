function Utils() {
  // The following function expects an argument which is a valid CSS selector string for the row element
  // that has some data value associated with it. It returns undefined otherwise
  this.getDataFromRow = function(elementId) {
    // get the row
    let row;
    try {
      row = document.querySelectorAll(`${elementId}`);
      return row;
    } catch {
      console.log(`The element with id ${elementId} does not exist`);
      return;
    }

    // let data = {};
    // // Get data from the row
    // try {

    //   row.forEach(() => {
    //     data[``]
    //   });
    // } catch {
    //   console.log("The element does not contain any data");
    // }
  };
}

export default Utils;
