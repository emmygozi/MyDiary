const search = (nameKey, myArray) => {
  for (let i = 0; i < myArray.length; i += 1) {
    if (myArray[i].name === nameKey) {
      return myArray[i];
    }
  }
};

export default search;
