import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Input, SecureInput } from "@/components/form";
import { Routes } from "@/utils/constants/routes";
import { LoginFormType, loginSchema } from "@/utils/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  function handleFormSubmission(data: LoginFormType) {
    console.log(data);
    alert("Haha, you can't login yet! :D");
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmission, console.log)}
      className="bg-white rounded p-12"
      noValidate
    >
      <Input
        required
        label="Endereço de Email"
        type="email"
        placeholder="exemplo@email.com"
        icon={<EnvelopeSimple className="text-text-200" size={20} />}
        {...register("email")}
        errorMessage={errors.email?.message}
      />
      <div className="my-3" />
      <SecureInput
        label="Palavra Passe"
        required
        {...register("password")}
        errorMessage={errors.password?.message}
      />
      <p className="my-7">
        Não possui uma conta?{" "}
        <Link
          className="animated-underline primary text-primary-600"
          href={Routes.clientRegister}
        >
          Registe-se já!
        </Link>
      </p>
      <small className="text-sm text-text-100">* - Campos obrigatórios</small>
      <PrimaryButton>
        Entrar <ArrowUpRight size={24} />
      </PrimaryButton>
    </form>
  );
}
