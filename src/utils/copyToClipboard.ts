export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.log("[!] copyToClipBoard", err);
    return false;
  }
};