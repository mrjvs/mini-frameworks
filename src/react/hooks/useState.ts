import { initializeHook, taintNode } from '@/react/hooks';

interface UseStateHook<T> {
  d?: T;
}

type UseStateSetter<T> = T | ((s: T) => T);

export function useState<T>(initial: T) {
  const hook = initializeHook<UseStateHook<T>>();
  if (hook.initial) hook.data.d = initial;

  function set(val: UseStateSetter<T>) {
    let newValue: any = val;
    if (typeof val === 'function') newValue = (val as any)(hook.data.d);
    if (newValue === hook.data.d) return; // if same value, ignore setter
    hook.data.d = newValue;
    taintNode(hook.node);
  }

  return [hook.data.d as T, set] as const;
}
