const keyArray = [];
const passCode = 'sendnoots';

const handleKeyPress = (e) => {
  keyArray.push(e.key);
  keyArray.splice(-passCode.length - 1, keyArray.length - passCode.length)
  if(keyArray.join('').includes('sendnoots')) {
    cornify_add();
  }
}

window.addEventListener('keyup', handleKeyPress);