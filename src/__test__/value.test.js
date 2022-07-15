// toBe() : 정확히 같은 값을 가지는지 체크
test("2 더하기 2는 4 이다.", () => {
  expect(2 + 2).toBe(4);
});

// toBeNull() : null인지 체크
// toBeUndefined : undefined인지 체크
// toBeDefined : undefined가 아니면 통과
// toBeTruthy : truthy 값이면 통과
// toBeFalsy : falsy 값이면 통과
test("2 더하기 2는 truthy다", () => {
  expect(2 + 2).toBeTruthy();
  expect(2 + 2).not.toBeFalsy();
});
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// toEqual() : 객체의 내부 값이 동일한지 체크
test("같은 아이디를 넘기면 가짜 유저 객체 넘긴다.", () => {
  const getUser = (id) => ({ id, email: `user${id}@test.com` });
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

// toBeGreaterThan(n)  : n보다 크면 통과
// toBeGreaterThanOrEqual(n) : n 이상이면 통과
// toBeLessThan(n) : n보다 작으면 통과
// toBeLessThanOrEqual(n) : n 이하이면 통과

// toBeCloseTo(floatNumber) : float 값 비교 시, round error에 의존하지 않기 위해 유사 정도로 판단
test("floating point 추가", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

// toMatch(RegExp) : 주어진 string 내에 매칭되는 정규표현식 존재하면 통과
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// toContain() : 배열 혹은 iterables에 포함되는지 확인
const shoppingCart = ["diapers", "milk", "paper towels"];
test("장바구니에 우유가 있다.", () => {
  expect(shoppingCart).toContain("milk");
});

// toThrow() : 함수가 에러를 던지는지 확인
const compileAndroidCode = () => {
  throw new Error("wrong JDK!");
};
test("안드로이드 컴파일링은 예상대로 동작한다.", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  // 던져지는 error message와 regexp 특정하여 캐치 가능
  expect(() => compileAndroidCode()).toThrow("wrong JDK!");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
