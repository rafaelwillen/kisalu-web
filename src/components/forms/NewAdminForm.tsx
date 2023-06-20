"use client";

import { genderSelectOptions } from "@/utils/constants/selectOptions";
import {
  AdminCreationFormType,
  adminCreationSchema,
} from "@/utils/schemas/adminCreationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "../buttons/PrimaryButton";
import AvatarImageInput from "./elements/AvatarImageInput";
import Input from "./elements/Input";
import SecureInput from "./elements/SecureInput";
import Select from "./elements/Select";

export default function NewAdminForm() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<AdminCreationFormType>({
    resolver: zodResolver(adminCreationSchema),
  });

  function createAdmin(data: AdminCreationFormType) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(createAdmin, (error) => console.log(error))}
      className="grid gap-2 gap-x-6 grid-cols-1 md:grid-cols-2"
    >
      <div className="col-span-full">
        <Controller
          control={control}
          name="avatarImage"
          render={({
            field: { onChange, value, ...options },
            fieldState: { error },
          }) => (
            <AvatarImageInput
              label="Foto de Perfil"
              onImageSelect={onChange}
              selectedImage={value}
              {...options}
              errorMessage={error?.message}
            />
          )}
        />
      </div>
      <Input
        label="Primeiro Nome"
        {...register("firstName")}
        errorMessage={errors.firstName?.message}
      />
      <Input
        label="Apelido"
        {...register("lastName")}
        errorMessage={errors.lastName?.message}
      />
      <Controller
        control={control}
        name="gender"
        render={({
          field: { onChange, value, ...options },
          fieldState: { error },
        }) => (
          <Select
            label="Género"
            onValueSelect={onChange}
            selectedValue={value}
            {...options}
            options={genderSelectOptions}
            errorMessage={error?.message}
          />
        )}
      />
      <Input
        type="email"
        label="Email"
        {...register("email")}
        errorMessage={errors.email?.message}
      />
      <SecureInput
        label="Password"
        {...register("password")}
        errorMessage={errors.password?.message}
      />
      <SecureInput
        label="Confirmar Password"
        {...register("confirmPassword")}
        errorMessage={errors.confirmPassword?.message}
      />
      <div className="col-span-full justify-self-center md:w-1/3 w-full mt-4">
        <PrimaryButton type="submit">Criar Administrador</PrimaryButton>
      </div>
    </form>
  );
}
