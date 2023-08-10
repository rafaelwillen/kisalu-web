export type SelectOption = {
  value: string;
  label: string;
};

export const homeSearchSelectRole: SelectOption[] = [
  {
    value: "service",
    label: "Serviço",
  },
  {
    value: "project",
    label: "Projecto",
  },
  {
    value: "provider",
    label: "Prestador",
  },
];


export const adminCategoriesSelectOptions: SelectOption[] = [
  {
    value: "name-asc",
    label: "Nome - Asc",
  },
  {
    value: "name-desc",
    label: "Nome - Desc",
  },
  {
    value: "number-services-asc",
    label: "Nº de Serviços - Asc",
  },
  {
    value: "number-services-desc",
    label: "Nº de Serviços - Desc",
  },
  {
    value: "number-activities-asc",
    label: "Nº de Atividades Ativas - Asc",
  },
  {
    value: "number-activities-desc",
    label: "Nº de Atividades Ativas - Desc",
  },
];

export const genderSelectOptions: SelectOption[] = [
  {
    value: "Male",
    label: "Masculino",
  },
  {
    value: "Female",
    label: "Feminino",
  },
];

export const servicesStatusSelectOptions: SelectOption[] = [
  {
    value: "Available",
    label: "Disponível",
  },
  {
    value: "Draft",
    label: "Rascunho",
  },
  {
    value: "Unavailable",
    label: "Indisponível",
  },
];