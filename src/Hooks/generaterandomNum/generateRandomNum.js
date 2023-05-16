export default function RandomNum(n) {
    const numbers = new Set();
    
    while (numbers.size < n) {
      const randomNumber = Math.floor(Math.random() * 100); // 0부터 100까지의 랜덤한 숫자 생성
      numbers.add(randomNumber);
    }
    
    return Array.from(numbers);
  }
  
