
/**
 * @param {Array<number>} coins
 * @param {number} amount
 * @return {number}
 */
const leastCoins = (coins, amount) => {
  const memory = new Array(amount+1);
  memory.fill(-1);
  memory[0] = 0;
  calculate(memory, coins, amount);

  return memory[amount];
}

const calculate = (memory, coins, amount) => {
  
  if (amount < 0) {
    return -1;
  }
   if(memory[amount]>=0){
     return memory[amount]; 
   }
   
    for(let i = 0; i<coins.length; i++){
      const coin = coins[i];
      const remainder = amount - coin; 
      const remaining = remainder >= 0 ? calculate(memory, coins, remainder) : -1; 
      if(memory[amount]===-1 && remaining!==-1){
        memory[amount] = 1 + remaining;
      }else if(remaining!==-1){
        memory[amount] = Math.min(memory[amount], 1 + remaining);
      }

    }
    //console.log(memory, amount);
    return memory[amount]; 
}

// const leastCoins = (coins, amount) => {
//   const memory = new Array(amount+1);
//   memory.fill(-1);
//   memory[0] = 0;
//   for(let i=1 ;i <=amount; i++){
      
//       for(let j=0; j< coins.length; j++){
//           const coin = coins[j];
//           if(coin>i)
//           {
//             continue; 
//           }
//           //console.log(i, coin);
//           if(memory[i] === -1 && memory[i-coin]!==-1){
//               memory[i] = 1 + memory[i-coin];
//           } else if( memory[i-coin]!==-1){

//               memory[i] = Math.min(memory[i], 1 + memory[i-coin]);
//           }

//       }
      
//   }
//   //console.log(memory);
//   return memory[amount];
// } 
