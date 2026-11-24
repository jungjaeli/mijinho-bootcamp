const samples = ['{"title":"첫 메모"}', '{"title":}', '{}'];

for (const sample of samples) {
  try {
    const note = JSON.parse(sample);

    if (typeof note?.title !== "string" || note.title.trim() === "") {
      throw new Error("메모 제목을 입력해 주세요.");
    }

    console.log(`읽은 메모: ${note.title}`);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("오류: JSON 문법을 확인해 주세요.");
    } else {
      console.log(`오류: ${error.message}`);
    }
  } finally {
    console.log("입력 확인 완료");
  }
}

// 실습: 제목이 빈 문자열인 입력을 추가하고 어떤 메시지가 나오는지 확인하세요.
