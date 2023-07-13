import { z } from "zod";
import { IMAGE_MIME_TYPES, MAX_IMAGE_FILE } from "../constants";

export const fileSchema = z
  .custom<File>((file) => file instanceof File, {
    message: "Campo obrigatório",
  })
  .refine(
    (file) => file.size < MAX_IMAGE_FILE,
    "Ficheiro demasiado grande. Deve ser inferior a 5MB"
  )
  .refine(
    (file) => IMAGE_MIME_TYPES.includes(file.type),
    "Deve ser uma imagem nos seguintes formatos (png, jpg, jpeg, webp)"
  );
