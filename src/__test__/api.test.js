const fetchData = async (url) => {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data[0].title)
    .catch((e) => {
      throw new Error("fetch error");
    });
};

// ===================================

test("데이터는 sunt를 포함한다.", async () => {
  // 실제 data : "sunt aut facere repellat ..."
  const data = await fetchData("https://jsonplaceholder.typicode.com/posts");
  expect(data).toMatch(/sunt/);
});

test("fetch 실패하면, 에러를 던진다.", async () => {
  expect.assertions(1);
  try {
    await fetchData("/user");
  } catch (e) {
    expect(e).toThrow(/error/);
  }
});

// ===================================
// 위의 두 테스트 코드는 문법적 설탕으로 다음과 같이 바꿀 수 있다.

test("데이터는 sunt를 포함한다", async () => {
  await expect(fetchData("https://jsonplaceholder.typicode.com/posts")).resolves.toMatch(/sunt/);
});

test("fetch 실패하면, 에러를 던진다", async () => {
  await expect(fetchData("/user")).rejects.toThrow(Error);
});
