import { helloWorld } from "@entrypoint"

describe("world()", () => {
  it("must work", () => {
    expect(helloWorld()).toEqual("hello-world");
  })
})


