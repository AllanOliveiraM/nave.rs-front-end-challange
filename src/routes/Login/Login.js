import React from 'react'
import { Formik } from 'formik'
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

import { CURRENT_LANGUAGE as lang } from 'helpers/constants'

const Login = () => {
  const { login } = useAuth()

  const onSubmit = async values => {
    try {
      await login(values)
    } catch (error) {
      console.log(error)
      toast.error(lang.toasts.wrongData)
    }
  }

  const initialValues = {
    email: '',
    password: ''
  }

  return (
    <RootStyledDiv className='in-animation'>
      <Helmet>
        <title>{lang.document.titles.loginPage}</title>
      </Helmet>
      <StyledColumn as='form'>
        <StyledLogo />
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginSchema}>
          {({ handleSubmit, isSubmitting }) => (
            <>
              <StyledInput
                name='email'
                autoComplete='email'
                label={lang.accounts.email}
                placeholder={lang.placeholders.email}
              />
              <StyledInput
                name='password'
                autoComplete='password'
                label={lang.accounts.password}
                placeholder={lang.placeholders.password}
                type='password'
              />
              <Button type='submit' width='100%' isLoading={isSubmitting} onClick={handleSubmit}>
                {lang.accounts.logIn}
              </Button>
            </>
          )}
        </Formik>
      </StyledColumn>
    </RootStyledDiv>
  )
}

const StyledColumn = styled(Column)`
  max-width: 44.8rem;
  width: 80vw;
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
