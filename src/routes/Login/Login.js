import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import Column from 'components/Column'
import Input from 'components/Input'
import Button from 'components/Button'
import Logo from 'components/Logo'

import { useAuth } from 'context/auth-context'

import { loginSchema } from 'helpers/yup-schemas'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import lang from 'assets/locale/pt-br.json'

const Login = () => {
  const { login } = useAuth()

  const { register, handleSubmit, errors, formState } = useForm({ validationSchema: loginSchema })

  const onSubmit = async values => {
    try {
      await login(values)
    } catch (error) {
      console.log(error)
      toast.error(lang.toasts.wrongData)
    }
  }

  return (
    <>
      <StyledColumn className='login-container' as='form' onSubmit={handleSubmit(onSubmit)} p={40} alignItems='center'>
        <StyledLogo className='logotype' />
        <Input
          width='100%'
          name='email'
          autoComplete='email'
          register={register}
          label={lang.accounts.email}
          placeholder={lang.placeholders.email}
          error={errors.email?.message}
        />
        <Input
          width='100%'
          name='password'
          autoComplete='password'
          register={register}
          label={lang.accounts.password}
          placeholder={lang.placeholders.password}
          error={errors.password?.message}
          type='password'
        />
        <Button width='100%' isLoading={formState.isSubmitting}>
          {lang.accounts.logIn}
        </Button>
      </StyledColumn>
      <ToastContainer />
    </>
  )
}

const StyledColumn = styled(Column)`
  border: 1px solid black;
  border-radius: 0;
  padding: 0 3.4rem 3.4rem;
  font-size: 1.4rem;
`

const StyledLogo = styled(Logo)`
  width: 23.5rem;
  margin: 3.2rem 3.2rem;
  @media (min-width: 800px) {
    width: 23.5rem;
    margin: 4rem 7.2rem;
  }
`

export default Login
