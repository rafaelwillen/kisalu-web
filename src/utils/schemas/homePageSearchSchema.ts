import { z } from "zod";

export const homePageSearchSchema = z.object({
  search: z.string().min(1),
  role: z.enum(["service", "project", "provider"]),
});

export type HomePageSearchFormType = z.infer<typeof homePageSearchSchema>;
