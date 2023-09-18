export const getWordGroup = (arr1, arr2) => {
    for (let i = 0; i < 4; i++) {
      if (arr1[i].includes(arr2[0])) {
        return i;
      }
    }
  };

export const isArrayInside = (arr1, arr2) => {
    for (const item1 of arr1) {
      let arraysMatch = true;
      for (const item2 of arr2) {
        if (!item1.includes(item2)) {
          arraysMatch = false;
          break;
        }
      }
      if (arraysMatch === true) return true;
    }
    return false;
  };

  export const shuffle = (arr) => { 
    for (let i = arr.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [arr[i], arr[j]] = [arr[j], arr[i]]; 
    } 
    return arr; 
  }; 

  export const containsDuplicates = (arr) => {
    
  }
    