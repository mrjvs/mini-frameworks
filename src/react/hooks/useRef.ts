import { initializeHook } from '@/react/hooks';

interface useRefHook<T> {
  ref: {
    current: T;
  };
}

export function useRef<T>(initial: T) {
  const hook = initializeHook<useRefHook<T>>();
  if (hook.initial)
    hook.data.ref = {
      current: initial,
    };

  return hook.data.ref;
}
