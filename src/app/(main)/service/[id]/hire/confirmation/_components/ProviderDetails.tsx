import { GetProviderByIdResponseBody } from "@/api/types/response";
import Image from "next/image";

type Props = {
  provider: GetProviderByIdResponseBody;
};

export default function ProviderDetails({ provider }: Props) {
  const {
    firstName,
    lastName,
    avatarImageURL,
    auth: { createdAt, email, phoneNumber },
  } = provider;
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="border border-neutral-200 rounded-lg shadow-lg p-8">
      <h2 className="font-medium text-center">Dados do Prestador</h2>
      <Image
        src={avatarImageURL!}
        alt={fullName}
        className="rounded-full mx-auto my-5 bg-white border border-neutral-300"
        width={90}
        height={90}
      />
      <p className="font-bold text-xl my-5">
        Nome: <span className="font-regular">{fullName}</span>
      </p>
      <p className="font-bold text-xl my-5">
        Email: <span className="font-regular">{email}</span>
      </p>
      <p className="font-bold text-xl my-5">
        Telefone: <span className="font-regular">{phoneNumber}</span>
      </p>
      <p className="font-bold text-xl my-5">
        Prestador desde:{" "}
        <span className="font-regular">
          {new Date(createdAt).toLocaleDateString("pt-AO")}
        </span>
      </p>
    </div>
  );
}
