//v2 useFromValidation 리팩토링
import { ZodObject, ZodRawShape } from "zod";
import { useCallback, useState } from "react";

// 타입->인터페이스 통일성
// useCallback 으로 최적화하기
// 에러는 global-error , useActionState 사용하여 에러 관리 리팩토링
// https://nextjs-ko.org/docs/app/building-your-application/routing/error-handling

export interface IFormValidationResult<T> {
  errors: Partial<T> | null;
  validateField: (name: string, value: string) => void;
  resetErrors: () => void;
  hasErrors: boolean;
}
// T = ILoginFormError | TSignUpFormError
// export interface ILoginFormError {
//   email?: string[];
//   pw?: string[];
// }

const useFormValidate = <T,>(
  schema: ZodObject<ZodRawShape>,
): IFormValidationResult<T> => {
  const [errors, setErrors] = useState<Partial<T> | null>(null);
  // 데이터 검증
  const validateField = useCallback(
    (name: string, value: string) => {
      const parsedValue = schema
        .pick({ [name]: true }) // schema 에서 name pick
        .safeParse({ [name]: value }); // schema validation 검증
      // {success: boolean , data | error}
      // false -> error
      if (!parsedValue.success) {
        setErrors((prev) => ({
          ...prev,
          ...parsedValue.error.flatten().fieldErrors, // email, pw
        }));
        //   true -> delete error
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [schema],
  );
  const resetErrors = useCallback(() => {
    return setErrors(null);
  }, []);
  const hasErrors = !!errors;

  return { errors, validateField, resetErrors, hasErrors };
};
export default useFormValidate;
