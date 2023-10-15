"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useAuth } from "@/context/AuthContext";
import { Routes } from "@/utils/constants/routes";
import {
  ServiceReviewFormType,
  TEXT_AREA_MAX_LENGTH,
  serviceReviewSchema,
} from "@/utils/schemas/serviceReivewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import RatingInput from "./elements/RatingInput";
import TextArea from "./elements/TextArea";

export default function ReviewForm() {
  const { token } = useAuth();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceReviewFormType>({
    resolver: zodResolver(serviceReviewSchema),
    defaultValues: {
      rating: 0,
      review: "",
    },
  });

  function onSubmit(formData: ServiceReviewFormType) {
    console.log(formData);
  }

  return (
    <>
      <form
        className={classNames(
          "mt-5 space-y-4",
          !token ? "opacity-25 pointer-events-none" : ""
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="rating"
          render={({
            field: { name, onChange, value },
            fieldState: { error },
          }) => (
            <RatingInput
              label="A sua avaliação"
              required
              errorMessage={error?.message}
              name={name}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <TextArea
          label="Comentário"
          maxLength={TEXT_AREA_MAX_LENGTH}
          {...register("review")}
          errorMessage={errors.review?.message}
        />
        <div className="xl:w-1/3">
          <PrimaryButton type="submit">
            Enviar comentário <ArrowUpRight />
          </PrimaryButton>
        </div>
      </form>
      {!token && (
        <p className="mt-2">
          <Link className="text-primary-600" href={Routes.login}>
            Inicie a sessão
          </Link>{" "}
          para deixar um comentário.
        </p>
      )}
    </>
  );
}
