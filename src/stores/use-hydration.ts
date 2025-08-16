import { useEffect, useState } from "react";

import { useBaseGlobalStore } from "./index";

export const useHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Note: This is just in case you want to take into account manual rehydration.
    // You can remove the following line if you don't need it.
    const unsubscribeHydrate = useBaseGlobalStore.persist.onHydrate(() => setHydrated(false));

    const unsubscribeFinishHydration = useBaseGlobalStore.persist.onFinishHydration(() => setHydrated(true));

    setHydrated(useBaseGlobalStore.persist.hasHydrated());

    return () => {
      unsubscribeHydrate();
      unsubscribeFinishHydration();
    };
  }, []);

  return hydrated;
};
