싱글스레드와 이벤트루프
1. 싱글스레드
javascript는 기본적으로 하나의 스레드에서 코드를 실행함.
따라서 한 번에 하나의 javascript 작업만 실행가능.
*콜스택 : 실행중인 함수를 관리하는 공간(LIFO구조)
*동기(Synchronous) : 코드가 순서대로 실행되며 앞선 작업이 끝나야 다음 작업이 진행가능
*비동기(Asynchronous) : 시간이 걸리는 작업의 완료를 기다리는 동안 다른 코드를 실행할 수 있다.


2. 이벤트 루프
javascript가 싱글 스레드임에도 비동기 작업을 처리할 수 있도록 실행 흐름을 조정하는 메커니즘이다. -> 다른 건 싱글 스레드가 아닌가 ? 
브라우저에서는 javascript 엔진과 브라우저의 비동기 처리 기능이 함께 동작함.

Call Stack : 현재 실행중인 함수 관리
Web APIs 브라우저에서 타이머, 네트워크 요청 등을 처리
microtask QuEUE : promise.then() await이후 코드 등을 대기
Task Queue : setTimeout, 이벤트 콜백 등을 대기
Event Loop : 실행 가능한 작업을 선택하고 실행 흐름 조정

3. 이벤트 루프 실행 순서
    1.동기 코드가 콜 스택에서 실행된다.
    2. 비동기 작업의 콜백은 실행조건이 충족되면 해당 큐에서 대기한다.
    3. 현재 작업이 끝나면 마이크로태스크 큐를 비울 때까지 실행한다. ->마이로태스크 큐 포화 상태 시 다른 작업의 우선순위가 밀려나서 실행 못하는 상황은 ?
    4. 이후 다음 태스크를 실행한다.
    5. 이 과정을 반복한다.

4. Promise와 asnync/await
*Promise : 비동기 작업의 결과를 나타내는 객체로 Pending, Fullfilled , Rejected 상태가 있음.
* resolve() : promise의 결과를 결정하는 함수로 일반적인 값을 전달하면 이행 상태가 됨
*reject() : Promise를 거부 상태로 만든다.
*async: Promise를 반환하는 함수를 선언한다.
*await: Promise의 결과를 기다리면서 해당 asnyc 함수의 실행을 일시 중단한다.
*try/catch : 실행 중 발생한 예외를 처리한다.


6. 핵심 정리
-> JavaScript는 기본적으로 싱글 스레드로 코드를 실행하지만, 이벤트 루프와 실행 환경의 비동기 처리 기능을 통해 여러 작업을 효율적으로 처리할 수 있음.

A1 : 이벤트 루프는 멀티스레드를 대신하는 기술이라기보다 비동기 작업의 완료와 콜백 실행을 조정하는 메커니즘임.

A2: 운영체제의 Aging 기능. ..  . 없는건가 스케줄링과 다른 개념 ?

async function getUser() {
    const response = await fetch("/api/user");
    const user = await response.json();

    console.log(user);
}
서버에 http 요청 전송 - > 1.await 서버 응답받아 response 객체 확보 -> 2.await .....파싱기다림 3. 출력

이벤트 루프(Event Loop) 는 JavaScript의 싱글 스레드 실행 방식에서 발생할 수 있는 대기 문제를 완화하기 위한 메커니즘이다. API 요청이나 데이터베이스 조회 같은 비동기 작업을 기다리는 동안 다른 코드를 실행할 수 있도록 작업의 실행 순서를 조정하여 효율적인 처리를 가능하게 한다.