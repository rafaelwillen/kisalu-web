"use client";

import { createClient } from "@/api/client";
import { createProvider } from "@/api/provider";
import { CreateUserRequestBody } from "@/api/types/request";
import {
  ADULT_DATE_OF_BIRTH,
  DEFAULT_USER_AVATAR_API_URL,
} from "@/utils/constants";
import { Routes } from "@/utils/constants/routes";
import { genderSelectOptions } from "@/utils/constants/selectOptions";
import {
  RegisterFormType,
  registerSchema,
} from "@/utils/schemas/clientRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PrimaryButton from "../buttons/PrimaryButton";
import DatePicker from "./elements/DatePicker";
import Input from "./elements/Input";
import SecureInput from "./elements/SecureInput";
import Select from "./elements/Select";

type Props = {
  userType: "client" | "provider";
  redirectTo?: string;
};

export default function UserRegisterForm({ userType, redirectTo }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      birthDate: ADULT_DATE_OF_BIRTH,
    },
  });
  const { mutateAsync, isLoading } = useMutation(
    (data: CreateUserRequestBody) =>
      userType === "client" ? createClient(data) : createProvider(data),
    {
      onError: (err) => {
        if (err instanceof Error) {
          toast.error(err.message);
        }
      },
    }
  );
  const router = useRouter();

  async function handleFormSubmit({
    confirmPassword,
    ...data
  }: RegisterFormType) {
    await mutateAsync({
      ...data,
      avatarImageURL: DEFAULT_USER_AVATAR_API_URL.concat(
        `/seed=${data.firstName}${data.lastName}`
      ),
    });
    toast.success("Conta criada com sucesso!");
    router.replace(redirectTo ?? Routes.home);
  }
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit, (err) => console.log(err))}
      noValidate
      className="bg-white rounded p-10"
    >
      <p className="text-center text-sm mb-4 md:text-left md:text-base">
        {userType === "client" ? (
          <>
            Crie uma conta como <strong>cliente</strong> para começar a
            requisitar serviços.
          </>
        ) : (
          <>
            Crie uma conta como <strong>prestador</strong> para começar a
            prestar serviços
          </>
        )}
      </p>
      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input
            required
            label="Primeiro Nome"
            {...register("firstName")}
            errorMessage={errors.firstName?.message}
          />
          <Input
            required
            label="Último Nome"
            {...register("lastName")}
            errorMessage={errors.lastName?.message}
          />
        </div>
        <Input
          type="tel"
          required
          label="Número de Telefone"
          placeholder="+244 999 999 999"
          icon={<Phone className="text-text-200" size={20} />}
          {...register("phoneNumber")}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          required
          label="Endereço de Email"
          type="email"
          placeholder="exemplo@email.com"
          icon={<Mail className="text-text-200" size={20} />}
          {...register("email")}
          errorMessage={errors.email?.message}
        />
        <Controller
          control={control}
          name="birthDate"
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <DatePicker
              {...rest}
              onDateChange={onChange}
              selectedDate={value}
              label="Data de Nascimento"
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="gender"
          render={({
            field: { onChange, value, ...rest },
            fieldState: { error },
          }) => (
            <Select
              options={genderSelectOptions}
              label="Género"
              selectedValue={value}
              onValueSelect={onChange}
              {...rest}
              errorMessage={error?.message}
            />
          )}
        />
        <div className="my-3" />
        <SecureInput
          label="Palavra Passe"
          required
          {...register("password")}
          errorMessage={errors.password?.message}
        />
        <SecureInput
          label="Confirmar Palavra Passe"
          required
          {...register("confirmPassword")}
          errorMessage={errors.confirmPassword?.message}
        />
      </div>
      <p className="my-7">
        Já possui uma conta?{" "}
        <Link
          className="animated-underline primary text-primary-600"
          href={Routes.login}
        >
          Faça o login.
        </Link>
      </p>
      <small className="text-sm text-text-100">* - Campos obrigatórios</small>
      <PrimaryButton isLoading={isLoading}>
        Registrar <ArrowUpRight size={24} />
      </PrimaryButton>
    </form>
  );
}
