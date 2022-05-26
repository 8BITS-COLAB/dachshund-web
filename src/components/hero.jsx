import React, { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { env } from '../env'

import { RegisterForm } from './register-form'

export function Hero({ title, content, illustration }) {
  const scrollRevealRef = useRef([])

  useEffect(() => {
    if (scrollRevealRef.current) {
      scrollRevealRef.current.map((ref, index) =>
        ScrollReveal().reveal(scrollRevealRef.current[index], {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  async function onRegister(params) {
    const response = await fetch(`${env.API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response
  }

  return (
    <section className="text-center lg:w-full lg:py-4 lg:text-left">
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div
            className="hero-copy bg-white pt-10 pb-16 lg:pt-16 lg:pr-20"
            style={{ minWidth: '600px' }}
          >
            <div className="mx-auto w-full max-w-3xl">
              <h1
                ref={(el) => (scrollRevealRef.current[0] = el)}
                className="mt-0 mb-4 text-4xl font-bold md:text-5xl "
              >
                {title}
              </h1>
              <p
                ref={(el) => (scrollRevealRef.current[1] = el)}
                className="prose prose-xl px-16 text-gray-500 md:px-0"
              >
                {content}
              </p>
            </div>

            <div ref={(el) => (scrollRevealRef.current[2] = el)}>
              <RegisterForm
                className="m-0 max-w-md md:flex"
                submitBtn="Register"
                onSubmit={onRegister}
              />
            </div>
          </div>

          {!!illustration && (
            <div className="relative -ml-6 -mr-6 py-10 lg:p-0">
              {illustration}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
