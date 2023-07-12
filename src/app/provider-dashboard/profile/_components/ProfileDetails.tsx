import { UserAuthenticationResponseBody } from "@/api/types/response";

type Props = {
  user: UserAuthenticationResponseBody;
};

export default function ProfileDetails({ user }: Props) {
  return (
    <article className="mt-4 lg: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <div className="space-y-1">
        <p className="font-medium text-sm">Primeiro Nome</p>
        <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
          {user.firstName}
        </p>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-sm">Último Nome</p>
        <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
          {user.lastName}
        </p>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-sm">Email</p>
        <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
          {user.email}
        </p>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-sm">Telefone</p>
        <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
          {user.phoneNumber}
        </p>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-sm">Género</p>
        <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
          {user.gender === "Female" ? "Feminino" : "Masculino"}
        </p>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-sm">Data de Nascimento</p>
        <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
          {new Date(user.birthDate!).toLocaleDateString("pt-AO")}
        </p>
      </div>
      {user.address && (
        <>
          <div className="space-y-1">
            <p className="font-medium text-sm">Província</p>
            <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
              {user.address.province}
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-medium text-sm">Município</p>
            <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
              {user.address.county}
            </p>
          </div>
          <div className="space-y-1 col-span-full">
            <p className="font-medium text-sm">Endereço</p>
            <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100">
              {user.address.addressLine}
            </p>
          </div>
        </>
      )}
      <div className="space-y-1 md:col-span-2">
        <p className="font-medium text-sm">Biografia</p>
        <p className="border border-neutral-200 rounded bg-white p-2 lg:p-4 text-text-100  min-h-[150px]">
          {user.biography ?? "Sem biografia"}
        </p>
      </div>
    </article>
  );
}
