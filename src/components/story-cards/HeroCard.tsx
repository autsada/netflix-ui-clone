import React from 'react'
import { useForm, Controller } from "react-hook-form"

import StoryCardText from '../shared/StoryCardText'

interface Props {

}

const HeroCard: React.FC<Props> = () => {
  const { handleSubmit, formState: { errors }, control, reset } = useForm<{ email: string }>()

  const onSubmit = handleSubmit(data => console.log(data))

  function moveEmailLabelUp() {
    const labelEl = document.getElementById('email-label')

    if (labelEl) {
      labelEl.classList.remove('label-center', 'label-down-animate')
      labelEl.classList.add('label-top', 'label-up-animate')
    }
  }

  function moveEmailLabelBack() {
    const labelEl = document.getElementById('email-label')

    if (labelEl) {
      labelEl.classList.remove('label-top', 'label-up-animate')
      labelEl.classList.add('label-center', 'label-down-animate')
    }
  }

  return <div className='story-card hero-card'>
    <div className="story-card-background">
      <div className="background-img-wrapper">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/76b9c2a8-78c4-43b1-bfad-bf5fe3672547/TH-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className="background-img" />
        <div className="img-gradient" />
      </div>
    </div>

    <StoryCardText title='Unlimited movies, TV shows, and more.' subtitle='Watch anywhere. Cancel anytime.'>

      <form action="" className="email-form" onSubmit={onSubmit}>
        <h3 className="email-form-title">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="email-form-area">
          <div className="email-input-wrapper">
            <label htmlFor="" className="email-input-section">
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
                  field: { value, onBlur, onChange },
                  fieldState: { invalid }
                }) => <input
                    type="email"
                    formNoValidate={true}
                    className="email-input"
                    autoComplete='email'
                    onFocus={moveEmailLabelUp}
                    onBlur={() => {
                      console.log(value)
                      if (!value) moveEmailLabelBack()
                      if (!value && invalid) reset()
                      onBlur()
                    }}
                    onChange={onChange}
                  />}
              />
              <label
                htmlFor="emailLabel" id='email-label' className='email-label label-center'
              >
                Email address
              </label>
            </label>
            {errors.email && <div className="input-error">{errors.email.message}</div>}
          </div>
          <div className="email-btn-wrapper">
            <button className="btn btn-red email-submit-btn">
              <span>Get Started</span>
              <span className='btn-right-arrow'>&#10095;</span>
            </button>
          </div>
        </div>
      </form>
    </StoryCardText>

    <div className="center-pixel"></div>
  </div>
}

export default HeroCard