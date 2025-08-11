export const getRandomColor = (id?: string | number): string => {
  let hash = 0;
  if (id !== undefined) {
    const str = id.toString();
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  } else {
    hash = Math.floor(Math.random() * 0xffffff);
  }
  const r = (((hash >> 16) & 0xff) % 128) + 128;
  const g = (((hash >> 8) & 0xff) % 128) + 128;
  const b = ((hash & 0xff) % 128) + 128;
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};
