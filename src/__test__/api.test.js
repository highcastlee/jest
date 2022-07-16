const fetchData = async (url) => {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data[0].title)
    .catch((e) => {
      throw new Error("fetch error");
    });
};
// ===================================
// expect 반환 값의 메서드로 resolves와 rejects 라는 matcher 사용 가능
// resolves : promise의 resolve 결과 값
// rejects : promise의 rejects 결과 값

test("데이터는 sunt를 포함한다", async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  await expect(fetchData(url)).resolves.toMatch(/sunt/);
});

test("fetch 실패하면, 에러를 던진다", async () => {
  await expect(fetchData("/user")).rejects.toThrow(Error);
});

// ==========================================================
