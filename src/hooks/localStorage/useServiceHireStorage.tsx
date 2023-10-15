import {
  ServiceHireFormType,
  serviceHireSchema,
} from "@/utils/schemas/serviceHireSchema";

export function useServiceHireStorage() {
  const KEY = "KISALU@ServiceHire";

  function get() {
    const data = localStorage.getItem(KEY);
    if (!data) return null;
    return serviceHireSchema.parse(JSON.parse(data));
  }

  function set(data: ServiceHireFormType) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  return [get, set] as const;
}
