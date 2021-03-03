// map()은 새 배열을 반환함
// 배열을 객체로 변환하고 싶을 때 reduce() 함수 사용

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55

// 첫 번째 인자에는 변환 함수       ->  (total, num) => total + num
// 두 번째 인자에는 초깃값          ->  0
// 변환 함수의 첫 번째 인자는 이전 결괏값           ->  total   ->  0 - (0+1) - (0+1+2) - ...
// 변환 함수의 두 번째 인자는 배열의 각 요솟값      ->  num     ->  1 - 2 -  - ...

// 응용
function parse(qs) {
  const queryString = qs.substr(0); // queryString = 'banana=10&apple=20&orange=30'
  const chunks = qs.split("&");
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split("=");
      return { key, value }; // {key = 'banana', value = '10'}
    })
    .reduce((result, item) => {
      // result = {}, item = {key = 'banana', value = '10'}
      result[item.key] = item.value; // result = { banana : '10' }
      return result;
    }, {});
}
