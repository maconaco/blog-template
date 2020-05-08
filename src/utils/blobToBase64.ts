export default (blob?: Blob): Promise<string | null> => {
  return new Promise(resolve => {
    if (!blob) { return resolve(null); }
    const reader = new window.FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = (): void => {
      resolve(reader.result as string);
    };
  });
};
