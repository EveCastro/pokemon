
const filterData = (data, condition) => {
  let arrType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === condition) {
        arrType.push(data[i]);  
      }
    }  
  }
  return arrType;
};



window.POKE = {

  filterData,
  
};