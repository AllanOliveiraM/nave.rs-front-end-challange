import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  },
  string: {
    email: 'Insira um e-mail válido'
  }
})

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})
