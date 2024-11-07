import { useEffect } from "react";
import { MemoryStorage, STORAGE_KEY } from "@/lib/data-storage";
import { XtsHttpAdapter } from "@/lib/xts-http-adapter";
import { getUserID } from "zmp-sdk";

export const useAppBootstrap = () => {
  const loadStorage = async () => {
    const storage = new MemoryStorage();
    storage.set(STORAGE_KEY.DOMAIN, process.env.REACT_APP_DOMAIN_API);
    const userId = await getUserID();
    storage.set(STORAGE_KEY.DEVICEID, userId);
    return storage;
  };
  useEffect(() => {
    loadStorage().then((storage) => {
      XtsHttpAdapter.getInstance().setStorage(storage);
    });
  }, []);

  return null;
};
