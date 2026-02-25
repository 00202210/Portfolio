const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const trimmedBasePath = rawBasePath.replace(/^\/+|\/+$/g, "");

export const basePath = trimmedBasePath ? `/${trimmedBasePath}` : "";

export function withBasePath(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
