import { Translated } from "@/lang/languageContext";
import { toast } from "react-toastify";

export const useNotify = (text: string) => {

  const translatedText = Translated(text);

  return {
    error: () => toast.error(translatedText),
    success: () => toast.success(translatedText),
  };
};
