const studyMinutes = [15, 20, 25];
let totalMinutes = 0;

for (let index = 0; index < studyMinutes.length; index += 1) {
  totalMinutes += studyMinutes[index];
}

console.log(`총 학습 시간: ${totalMinutes}분`);

// 실습: 배열에 10을 추가하고 바뀐 합계를 확인해 보세요.
