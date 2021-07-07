const toDataURL = async (url) => {
  const data = await fetch(url);
  const res = await data.blob();
  return URL.createObjectURL(res);
};

export const downloadImg = async (img) => {
  const link = document.createElement('a');
  link.href = await toDataURL(img);
  link.download = 'download.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
