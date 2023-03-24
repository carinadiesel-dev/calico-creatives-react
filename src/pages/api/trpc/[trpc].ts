import * as trpcNext from '@trpc/server/adapters/next';
import {mainRouter} from "@/server/routers/_app";

export default trpcNext.createNextApiHandler({
    router: mainRouter,
    createContext: () => ({
      session: null
    }),
});