import { ZodObject, ZodRawShape } from "zod";
import { useState } from "react";

const useFormValidate = <T,>(schema: ZodObject<ZodRawShape>) => {
  const [errors, setErrors] = useState<Partial<T>>();
  const validateField = (name: string, value: string) => {
    const parsedValue = schema
      .pick({ [name]: true }) // schema 에서 name pick
      .safeParse({ [name]: value }); // schema validation 검증

    if (!parsedValue.success) {
      setErrors({
        ...errors,
        ...parsedValue.error.flatten().fieldErrors,
      });
    } else {
      setErrors((prev) => ({ ...errors, [name]: "" }));
    }
    console.log("parsed value", parsedValue);
  };
  return { errors, validateField };
};

export default useFormValidate;
