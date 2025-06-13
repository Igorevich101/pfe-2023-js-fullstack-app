import * as yup from 'yup';

const USER_NAME_SCHEMA = yup.string().min(2).required();

export const USER_REGISTRATION_SCHEMA = yup.object({
  firstName: USER_NAME_SCHEMA,
  lastName: USER_NAME_SCHEMA,
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9#$%^&]{8,32}$/,
      'password must consists of english letters, numbers and special symbol (#, $, %, ^, &)'
    )
    .required(),
  passwordRepeat: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'password must match'),
  isMale: yup.bool(),
});
