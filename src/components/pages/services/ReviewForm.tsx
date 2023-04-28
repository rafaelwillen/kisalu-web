import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Checkbox, Input, Rating, TextArea } from "@/components/form";
import { useReviewStorage } from "@/hooks";
import {
  ServiceReviewFormType,
  TEXT_AREA_MAX_LENGTH,
  serviceReviewSchema,
} from "@/utils/schemas/serviceReivewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Controller, useForm } from "react-hook-form";

export default function ReviewForm() {
  const { saveToStorage, storedData } = useReviewStorage();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceReviewFormType>({
    resolver: zodResolver(serviceReviewSchema),
    defaultValues: {
      rating: 0,
      saveData: false,
    },
    values: storedData
      ? {
          email: storedData.email,
          name: storedData.name,
          rating: 0,
          review: "",
          saveData: false,
        }
      : undefined,
  });

  function onSubmit(formData: ServiceReviewFormType) {
    const { saveData, ...data } = formData;
    if (saveData) saveToStorage({ email: data.email, name: data.name });
    console.log(data);
  }

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="rating"
        render={({
          field: { name, onChange, value },
          fieldState: { error },
        }) => (
          <Rating
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
      <Input
        label="Nome"
        {...register("name")}
        errorMessage={errors.name?.message}
      />
      <Input
        label="Email"
        type="email"
        {...register("email")}
        errorMessage={errors.email?.message}
      />
      <Controller
        control={control}
        name="saveData"
        render={({ field, fieldState: { error } }) => (
          <Checkbox
            label="Salvar o meu nome e email para os próximos comentários"
            errorMessage={error?.message}
            {...field}
          />
        )}
      />
      <PrimaryButton type="submit">
        Enviar comentário <ArrowUpRight />
      </PrimaryButton>
    </form>
  );
}
