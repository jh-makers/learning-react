const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본 구조
  console.group(action && action.type); //액션 타입으로 log를 그룹화한다
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음(현재) 상태", store.getState()); //업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

/* 화살표 함수를 사용하지 않은 일반 function 코드의 경우
const loggerMiddleware = function loggerMiddleware(store){
    return function (next) {
        return function (action) {
            //미들웨어 구조
        };
    };
};

*/

export default loggerMiddleware;
