import React from 'react'
import { useForm } from 'react-hook-form'

import Column from 'components/Column'
import Input from 'components/Input'
import Button from 'components/Button'
import Logo from 'components/Logo'

import { useAuth } from 'context/auth-context'

import { loginSchema } from 'helpers/yup-schemas'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './Login.css'

const Login = () => {
  const notifyError = message => toast.error(`${message}`)

  const { login } = useAuth()

  const { register, handleSubmit, errors, formState } = useForm({ validationSchema: loginSchema })

  const onSubmit = async values => {
    try {
      await login(values)
    } catch (error) {
      console.log(error)
      notifyError('Dados incorretos!')
    }
  }

  return (
    <>
      <Column className='login-container' as='form' onSubmit={handleSubmit(onSubmit)} p={40} alignItems='center'>
        <Logo className='logotype' />
        <Input
          name='email'
          autoComplete='email'
          register={register}
          label='E-mail'
          placeholder='exemplo@exemplo.com'
          error={errors.email?.message}
        />
        <Input
          name='password'
          autoComplete='password'
          register={register}
          label='Senha'
          placeholder='******'
          error={errors.password?.message}
          type='password'
        />
        <Button isLoading={formState.isSubmitting}>Entrar</Button>
      </Column>
      <ToastContainer />
    </>
  )
}

export default Login
