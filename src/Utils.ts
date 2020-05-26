export const getCDNImagePath = (comicImageFullPath: string) => {
  const imageToModify = comicImageFullPath.split('/').pop();
  return `https://drsumnjbi1jhu.cloudfront.net/${imageToModify}`;
};
