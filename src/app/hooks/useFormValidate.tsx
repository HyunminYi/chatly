import { ZodObject, ZodRawShape } from "zod";
import { useState } from "react";

const useFormValidate = (schema: ZodObject<ZodRawShape>) => {
  const [errors, setErrors] = useState();
  const validateField = (name: string, value: string) => {
    const parsedValue = schema
      .pick({ [name]: true })
      .safeParse({ [name]: value });
    console.log("parsed value", parsedValue);
  };
  return { errors, validateField };
};

export default useFormValidate;
