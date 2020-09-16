import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import RootStyledDiv from 'components/FullPageContainer'
import Column from 'components/Column'
import Input from 'components/Input'
import Button from 'components/Button'
import Logo from 'components/Logo'

import { useAuth } from 'context/auth-context'

import { loginSchema } from 'helpers/yup-schemas'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

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
    <RootStyledDiv className='in-animation'>
      <Helmet>
        <title>{lang.document.titles.loginPage}</title>
      </Helmet>
      <StyledColumn col={1} as='form' onSubmit={handleSubmit(onSubmit)}>
        <StyledLogo />
        <StyledInput
          name='email'
          autoComplete='email'
          register={register}
          label={lang.accounts.email}
          placeholder={lang.placeholders.email}
          error={errors.email?.message}
        />
        <StyledInput
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
    </RootStyledDiv>
  )
}

const StyledColumn = styled(Column)`
  max-width: 80vw;
  border: 1px solid black;
  border-radius: 0;
  font-size: 1.4rem;
  padding: 0 3.4rem 3.4rem;
`

const StyledLogo = styled(Logo)`
  width: 80%;
  margin: 3.2rem 3.2rem;
  @media (min-width: 800px) {
    width: 23.5rem;
    margin: 4rem 7.2rem;
  }
`

const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 3.2rem;
`

export default Login
