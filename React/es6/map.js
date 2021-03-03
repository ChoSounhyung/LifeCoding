function parse(qs) {
  const queryString = qs.substr(0); // queryString = 'banana=10&apple=20&orange=30'
  const chunks = qs.split("&");
  // 함수를 통해 변환한 결과값들로 새 배열을 반환
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split("="); // key = 'banana', value = '10'
    return { key: key, value: value }; // {key = 'banana', value = '10'}
  });
  return result;
}

// result = [
//   { key: "banana", value: "10" },
//   { key: "apple", value: "20" },
//   { key: "orange", value: "30" },
// ];
