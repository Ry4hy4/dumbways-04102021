const drawImage = n =>{
  if(n % 2 === 0){
    console.log('false')
    return
  }
  for(i = 1; i <= n;i++){
    let rows = '';
    for(j=1; j<= n ;j++){
      if(i === (n+1)/2){
        rows += '* '
      }

      else if(i === 1 && j ===1){
        rows += '* '
      }else if(i === n && j === n){
        rows += '* '
      }else if(i === 1 && j ===n){
        rows += '* '
      }else if(i === n && j ===1){
        rows += '* '
      }
      
      else if(j === (n+1)/2 ){
        rows += '* '
      }
      else{
        rows += '# '
      }
    }
    console.log(rows)
  }
}

drawImage(7)
