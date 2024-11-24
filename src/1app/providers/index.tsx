import { ProviderStore } from "./store.provider";
import { ProviderRouter } from "./router.provider";

export const Providers = () => (
  <ProviderStore>
    
    <ProviderRouter />
  </ProviderStore>
);
// export const Providers =  compose(ProviderStore, ProviderRouter);
