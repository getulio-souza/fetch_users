const getElement = (selection) => {
  const element = document.querySelector(selection);
  //check if element is there 
  if (element) {
    return element
  } else {
    throw new Error('no element selected')
  }
}

export default getElement