# JavaScript 1주차

JavaScript 기초를 실습하고, 실행 결과와 배운 점을 기록하는 저장소입니다.

| 폴더 | 학습 내용 |
| --- | --- |
| [00-analysis](00-analysis/javascript.md) | JavaScript 5단계 분석과 순서도 |
| [part1-js](part1-js/) | JavaScript 기초 실습 5개 |
| [part2-express](part2-express/) | Express 메모 API 실습 계획 |
| [part3-front](part3-front/) | 메모 화면 실습 계획 |
| [project-littly](project-littly/) | 링크 모음형 자기소개 페이지 계획 |

## 실습 실행

저장소 폴더에서 PowerShell을 열고 Node.js를 확인한 뒤 예제를 하나씩 실행합니다. 별도 패키지 설치가 필요 없습니다.

```powershell
node --version
node part1-js/01-variable.js
node part1-js/02-condition.js
node part1-js/03-loop.js
node part1-js/04-json.js
node part1-js/05-error-handling.js
```

## 학습 체크리스트

- [ ] 변수 선언과 재할당 설명하기
- [ ] 조건문에서 기준값 바로 아래와 기준값 비교하기
- [ ] 반복문에서 누적값의 변화 확인하기
- [ ] JavaScript 객체를 JSON 문자열로 변환하고 되돌리기
- [ ] 정상 입력과 잘못된 입력의 예외 처리 흐름 비교하기
- [ ] 메모 API 만들기
- [ ] 화면에서 메모 API 연결하기
- [ ] 자기소개 링크 페이지 만들기

## Git으로 실습 기록하기

먼저 `git remote -v`로 GitHub 주소를 확인합니다. 다른 곳에서 이 저장소를 처음 받는다면 `git clone https://github.com/jungjaeli/mijinho-bootcamp.git`으로 복제합니다. 복제하면 GitHub 주소가 `origin`에 자동으로 등록됩니다.

변수 실습을 수정하고 체크리스트를 업데이트한 뒤 아래 명령을 순서대로 실행합니다.

```powershell
git status
git diff
git add part1-js/01-variable.js README.md
git diff --staged
git commit -m "practice: 변수 실습 기록"
git push origin main
git status
```

`status`는 파일 상태를 보여 줍니다. `diff`는 수정한 내용을 확인합니다. `add`는 커밋할 파일을 선택하고, `commit`은 그 변경을 로컬 기록에 저장합니다. `push`는 로컬 커밋을 GitHub에 올립니다. 실습 하나를 마칠 때마다 같은 순서로 기록합니다.

## 회고 메모

- 배운 점
- 막힌 점과 해결 과정
- 남은 질문
