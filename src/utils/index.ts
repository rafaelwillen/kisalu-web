export function decodeObjectURL(objectURL: string) {
  const path = new URL(objectURL).pathname;
  const decodedPath = decodeURIComponent(path);
  return decodedPath;
}
