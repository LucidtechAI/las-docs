export function debounce(fn: (args: any) => void, ms: number): () => void {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      // @ts-ignore 🤷‍♀️
      fn.apply(this, arguments); // eslint-disable-line
    }, ms);
  };
}
