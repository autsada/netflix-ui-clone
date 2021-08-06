import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form"

export interface Props {
  id: string
  formId: string
  setFormId: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
}

const EmailForm: React.FC<Props> = ({ id, formId, setFormId, email, setEmail }) => {
  const { handleSubmit, formState: { errors, isValid }, control, reset, clearErrors } = useForm<{ email: string }>({ defaultValues: { email: '' } })

  useEffect(() => {
    const inputEl = document.getElementById(`email-input-section-${id}`)
    if (inputEl) {
      if (errors.email) {
        inputEl.classList.add('error')
      }
      else {
        inputEl.classList.remove('error')
      }
    }
  }, [errors.email, id])

  useEffect(() => {
    clearErrors('email')
  }, [formId, clearErrors])

  const onSubmit = handleSubmit(data => {
    console.log(email)
    reset()
    setEmail('')
    moveEmailLabelDown(id)
  })

  function moveEmailLabelUp(labelId: string) {
    const labelEl = document.getElementById(labelId)

    if (labelEl) {
      labelEl.classList.remove('label-center', 'label-down-animate')
      labelEl.classList.add('label-top', 'label-up-animate')
    }
  }

  function moveEmailLabelDown(labelId: string) {
    const labelEl = document.getElementById(labelId)

    if (labelEl) {
      labelEl.classList.remove('label-top', 'label-up-animate')
      labelEl.classList.add('label-center', 'label-down-animate')
    }
  }

  return <form action="" className="email-form" onSubmit={onSubmit}>
    <h3 className="email-form-title">
      Ready to watch? Enter your email to create or restart your membership.
    </h3>
    <div className="email-form-area">
      <div className="email-input-wrapper">
        <label htmlFor="" id={`email-input-section-${id}`} className="email-input-section">
          <Controller
            control={control} name='email'
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              }
            }}
            render={({
              field: { onBlur, onChange },
            }) => <input
                type="text"
                formNoValidate={true}
                className="email-input"
                autoComplete='email'
                value={formId === id ? email : ''}
                onFocus={() => {
                  if (formId !== id) {
                    moveEmailLabelDown(formId)
                  }

                  setFormId(id)
                  moveEmailLabelUp(id)
                }}
                onBlur={() => {
                  if (formId === id && !email) {
                    moveEmailLabelDown(id)
                  }
                  onBlur()
                }}
                onChange={(e) => {
                  setEmail(e.target.value)
                  onChange(e.target.value)
                }}
              />}
          />
          <label
            htmlFor="emailLabel" id={id} className='email-label label-center'
          >
            Email address
          </label>
        </label>
        {!isValid && errors.email && <div className="input-error">{errors.email.message}</div>}
      </div>
      <div className="email-btn-wrapper">
        <button className="btn btn-red email-submit-btn" disabled={formId !== id} style={{ cursor: formId !== id ? 'not-allowed' : undefined }}>
          <span>Get Started</span>
          <span className='btn-right-arrow'>&#10095;</span>
        </button>
      </div>
    </div>
  </form>
}

export default EmailForm