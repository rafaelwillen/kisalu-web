import { ServiceReviewFormType } from "@/utils/schemas/serviceReivewSchema";
import { useEffect, useState } from "react";

type LocalStorageReviewData = Pick<ServiceReviewFormType, "email" | "name">;

const LOCAL_STORAGE_KEY = "kisalu:reviewData";

export default function useReviewStorage() {
  const [storedData, setStoredData] = useState<
    undefined | LocalStorageReviewData
  >();

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      const parsedData: LocalStorageReviewData = JSON.parse(data);
      setStoredData(parsedData);
    }
  }, []);

  const saveToStorage = ({ email, name }: LocalStorageReviewData) => {
    const data = {
      email,
      name,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    setStoredData(data);
  };

  return {
    storedData,
    saveToStorage,
  };
}
