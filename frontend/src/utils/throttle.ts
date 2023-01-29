export const throttle = (f: any, ms: number = 1000) => {
  let timer: NodeJS.Timeout | null = null;
  let savedArgs: any[] | null;
  console.log({ timer });
  const wrapper = (...args: any[]) => {
    if (timer) {
      savedArgs = args;
      console.log({ timer });
      return;
    }

    f(...args);

    timer = setTimeout(() => {
      timer = null;
      if (savedArgs) {
        wrapper(...savedArgs);
        savedArgs = null;
      }
    }, ms);
    console.log({ timer });
  };

  return wrapper;
};
