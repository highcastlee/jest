import { data, userService } from "./userService";

// beforeAll() : 테스트 전에 실행됨
// afterAll() : 해당 파일의 모든 테스트가 끝나고 실행됨

// beforeEach(): 각 테스트 전에 실행됨
// afterEach() : 각 테스트가 끝나고 실행됨
afterEach(() => {
  data.users = [];
});

// describe() : 여러 테스트 함수를 연관성으로 묶어주는 역할
// it() : test와 동일한 함수. mocha 등 다른 테스트 라이브러리에서 it을 사용함

describe("user CRUD 테스트", () => {
  test("user 모두 반환", () => {
    data.users.push({ id: 1, email: "user1@test.com" }, { id: 2, email: "user2@test.com" }, { id: 3, email: "user3@test.com" });

    const users = userService.findAll();

    expect(users).toHaveLength(3);
    expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
    expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
    expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
  });

  test("create a user", () => {
    const newUser = { id: 4, email: "user4@test.com" };

    userService.create(newUser);

    expect(data.users).toHaveLength(1);
    expect(data.users).toContainEqual(newUser);
  });

  // user를 삭제하면 해당 데이터에 user가 없어야한다.
  test("user 삭제", () => {
    data.users.push({ id: 1, email: "user1@test.com" }, { id: 2, email: "user2@test.com" }, { id: 3, email: "user3@test.com" });

    const id = 3;
    const user = data.users.find((user) => user.id === id);

    userService.destroy(id);
    expect(data.users).toHaveLength(2);
    expect(data.users).not.toContainEqual(user);
  });
});

// ============================================================

describe("test only or skip", () => {
  test.only("run only", () => {
    // 이 테스트 함수만 실행됨
  });

  test.skip("skip test", () => {
    //이 테스트 함수는 제외됨
  });
});

// ============================================================

describe("함수 mocking", () => {
  // fn() : mock function을 생성
  const mockFn = jest.fn();

  // mockReturnValue(value) : mock 함수의 return value
  mockFn.mockReturnValue("this is return value");
  console.log(mockFn()); // "this is return value"

  // mockResolvedValue(value) : resolve 됐을 때 return value
  mockFn.mockResolvedValue("this is resolved value");
  mockFn().then((result) => {
    console.log(result); // "this is resolved value"
  });
});
