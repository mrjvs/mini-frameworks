import { initializeHook } from '@/react/hooks';

type EffectRet = undefined | (() => void);

interface useEffectHook {
  deps?: any[];
  destruct?: EffectRet;
}

function hasDepsChanged(old?: any[], deps?: any[]): boolean {
  if (!old || !deps) return true;
  if (old.length !== deps.length) return true;
  const differenceIndex = old.findIndex((v, i) => v !== deps[i]);
  return differenceIndex !== -1;
}

export function useEffect(cb: () => EffectRet, deps?: any[]) {
  const hook = initializeHook<useEffectHook>();
  if (hook.initial) {
    hook.data.deps = deps;
    hook.data.destruct = cb();
    return;
  }

  if (hasDepsChanged(hook.data.deps, deps)) {
    hook.data.deps = deps;
    hook.data.destruct?.();
    hook.data.destruct = cb();
  }
}
