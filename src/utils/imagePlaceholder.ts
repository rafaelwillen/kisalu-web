import { getPlaiceholder } from "plaiceholder";

export async function getPlaceholder(src: string) {
  if (typeof document !== "undefined")
    throw new Error("Not allowed in browser environment");
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
