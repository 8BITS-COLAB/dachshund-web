import React from 'react'
import classnames from 'clsx'

export function RegisterForm({ className, onSubmit, submitBtn }) {
  const [params, setParams] = React.useState({
    name: '',
    email: '',
  })
  const [success, setSuccess] = React.useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await onSubmit(params)

    setParams({
      name: '',
      email: '',
    })

    setSuccess(response.status === 201)

    setTimeout(() => {
      setSuccess(null)
    }, 5000)
  }

  function handleChange(key) {
    return (event) => {
      setParams((p) => ({ ...p, [key]: event.target.value }))
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classnames(
        'register-form is-revealing flex-col md:flex',
        className
      )}
    >
      <div className="flex-shrink flex-grow">
        <label className="hidden" htmlFor="name" aria-hidden="true">
          Name
        </label>
        <input
          required
          placeholder="Your name&hellip;"
          id="name"
          name="name"
          type="name"
          value={params.name}
          onChange={handleChange('name')}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
      </div>

      <div className="my-4 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Email
        </label>
        <input
          required
          placeholder="Your best email&hellip;"
          id="email"
          name="email"
          type="email"
          value={params.email}
          onChange={handleChange('email')}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
        >
          {submitBtn || 'Submit'}
        </button>
      </div>
      {success === true && (
        <div className="mt-2 text-xs italic text-gray-500">
          Register successfully!
        </div>
      )}

      {success === false && (
        <div className="mt-2 text-xs italic text-gray-500">
          Error on register :(
        </div>
      )}
    </form>
  )
}
