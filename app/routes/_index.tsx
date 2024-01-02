import type { MetaFunction } from '@remix-run/node'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export const meta: MetaFunction = () => {
  return [{ title: 'Huddle Landing Page' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="flex w-full max-w-7xl flex-col items-center p-10 lg:my-auto">
      <img src="/images/logo.svg" alt="Huddle Logo" className="w-32 self-start lg:w-40" />
      <div className="flex flex-col ">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <img src="/images/illustration-mockups.svg" alt="Huddle Mockups" className="mx-auto mt-12 w-full max-w-2xl" />
          <div className="flex flex-col items-center justify-center lg:items-start">
            <h1 className="mt-12 text-center font-poppins text-2xl font-semibold leading-9 lg:text-left lg:text-[2.5rem] lg:leading-[3.75rem]">
              Build The Community Your Fans Will Love
            </h1>
            <p className="mt-4 text-center text-base leading-6 opacity-70 lg:text-left lg:text-[1.125rem] lg:leading-[1.6875rem]">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
              connections with your users as you engage in genuine discussion.
            </p>
            <button className="mt-6 cursor-pointer rounded-full bg-white px-16 py-3 text-xs leading-[1.125rem] text-violet shadow-[1px_3px_5px_0px_rgba(0,0,0,0.27)] hover:bg-soft-magenta hover:text-white lg:py-4 lg:text-[1.125rem] lg:leading-[1.6875rem]">
              Register
            </button>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-center gap-4 lg:self-end">
          <a className="social-link" href="http://facebook.com">
            <FaFacebookF />
          </a>
          <a className="social-link" href="http://twitter.com">
            <FaTwitter />
          </a>
          <a className="social-link" href="http://instagram.com">
            <FaInstagram />
          </a>
        </div>
      </div>
    </main>
  )
}
