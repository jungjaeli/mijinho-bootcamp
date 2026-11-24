const note = { title: "JSON 연습", done: false };
const jsonText = JSON.stringify(note);
const parsedNote = JSON.parse(jsonText);

console.log(jsonText);
console.log(parsedNote.title);

// 실습: done을 true로 바꾼 뒤 JSON 문자열이 어떻게 달라지는지 확인하세요.
