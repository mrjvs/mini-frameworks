describe('createElement()', () => {
  it('must make proper node from custom component', () => {
    const Test = () => 'test';
    expect(<Test />).toEqual({
      children: [],
      props: {},
      type: Test,
      key: null,
    });
  });

  it('must make proper node from intrinsic element', () => {
    expect(<div />).toEqual({
      children: [],
      props: {},
      type: 'div',
      key: null,
    });
  });

  it('must set correct props', () => {
    const Test = (_props: any) => 'test';
    expect(<Test a="a" b={42} c={Test} />).toEqual({
      children: [],
      key: null,
      props: {
        a: 'a',
        b: 42,
        c: Test,
      },
      type: Test,
    });
  });

  it('must set correct single child', () => {
    const Test = () => 'test';
    expect(<Test>hello</Test>).toEqual({
      children: ['hello'],
      key: null,
      props: {},
      type: Test,
    });
  });

  it('must set correct multiple child', () => {
    const Test = () => 'test';
    const A = () => 'a';
    expect(
      <Test>
        hello
        <A />
        world
      </Test>,
    ).toEqual({
      key: null,
      props: {},
      type: Test,
      children: [
        'hello',
        {
          key: null,
          props: {},
          type: A,
          children: [],
        },
        'world',
      ],
    });
  });

  it('must set key', () => {
    const Test = () => 'test';
    expect(<Test key="abc" />).toEqual({
      key: 'abc',
      props: {},
      type: Test,
      children: [],
    });
  });
});
