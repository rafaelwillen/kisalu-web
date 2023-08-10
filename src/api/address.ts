import { api, endpoints } from ".";

const { allCounties, allProvinces } = endpoints.address;

export async function getAllCountiesFromProvince(
  province: string
): Promise<string[]> {
  try {
    const response = await api.get<string[]>(allCounties(province));
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getAllProvinces(): Promise<string[]> {
  try {
    const response = await api.get<string[]>(allProvinces);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar províncias");
  }
}

export const addressQueryKeys = {
  allCountiesFromProvince: (province: string) => [
    "address/allCountiesFromProvince",
    province,
  ],
  allProvinces: ["address/allProvinces"],
};
