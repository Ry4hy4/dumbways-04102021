const checkKeys = (dataKey, word) => {
  dataKey.map(key=>{
    const arrKeys = key.split('');
    const arrwords = word.split('');
    let status = true;
    arrKeys.map(key=>{
      if(!arrwords.includes(key)){
        status = false;
      }
    })
    console.log(`- ${key} is ${status}`);
  })
}

const dataKey = ['dumb','ways', 'the', 'best'];
const word = 'dumbways'
checkKeys(dataKey, word);
