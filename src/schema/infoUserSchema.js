import * as yup from "yup";
const usernameRegex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneRegex =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
export const infoUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "* Username must contain at least 5 letters")
    .matches(usernameRegex, {
      message: "The username must contain 4-6 digits ",
    })
    .required("* Please enter your username"),
    passWord: yup
    .string()
    .min(6, "* Password must be 4-6 characters and numbers")
    .matches(passwordRegex, {
      message: "* Minimum eight characters, at least one number "
    })
    .required("* Please enter a new password"),
    confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('passWord'), null], `Password doesn't match`)
    .required("* Please enter a new password"),
  email: yup
    .string()
    .email("* Email is not valid")
    .required("* Please enter your email"),
  phoneNumber: yup
    .string()
    .matches(phoneRegex, { message: "* Phone number is not valid" })
    .required("* Please enter your phone number"),
});