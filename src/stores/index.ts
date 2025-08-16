import { createSelectorFunctions } from "auto-zustand-selectors-hook";
import { shared } from "use-broadcast-ts";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createUserSlice, UserSlice } from "./user";

export const useBaseGlobalStore = create<UserSlice>()(
  devtools(
    immer(
      persist(
        shared((...a) => ({
          ...createUserSlice(...a),
        })),
        { name: "naghdaneh-global-store", storage: createJSONStorage(() => localStorage) },
      ),
    ),
    {
      enabled: process.env.NODE_ENV === "development",
      name: "naghdaneh",
      store: "global-store",
      anonymousActionType: "action",
    },
  ),
);

export const useGlobalStore = createSelectorFunctions(useBaseGlobalStore);
export { useHydration } from "./use-hydration";
