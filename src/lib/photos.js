export function responsivePhoto(
  source,
  sizes = "(max-width: 767px) 100vw, 50vw",
) {
  const name = source
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");
  return {
    src: `/photos/optimized/${name}-1280.webp`,
    srcSet: `/photos/optimized/${name}-640.webp 640w, /photos/optimized/${name}-1280.webp 1280w`,
    sizes,
    decoding: "async",
    ...(name === "xqXiC44" ? { style: { objectPosition: "27% center" } } : {}),
    ...(name === "GA9ZfgG" ? { style: { objectPosition: "45% 25%" } } : {}),
  };
}
