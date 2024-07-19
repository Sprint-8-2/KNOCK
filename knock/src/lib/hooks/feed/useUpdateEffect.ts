import { useEffect, useRef } from 'react';

function useUpdateEffect(
  effect: React.EffectCallback,
  dependencies: React.DependencyList,
) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return effect();
  }, dependencies);
}

export default useUpdateEffect;
