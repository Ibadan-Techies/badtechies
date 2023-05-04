import * as React from 'react'
import { SquiggleLeft, SquiggleRight } from '@/assets/svg'
import Button from '../Button/button'
import { Container } from '../Layout/Container'

const headers = {
  Authorization: 'Token df8cf218-3976-4e75-9ee6-017a6ffe2d4f',
}
const BASE_URL = 'https://api.buttondown.email'
const ENDPOINT = '/v1/subscribers'

const { useState } = React
function SubscribeNewsLetter() {
  const [formState, setFormState] = useState('submit')
  const [email, setEmail] = useState('')
  const [dis, setDis] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    setEmail(target.value)
  }

  // function encode(data: string[]) {
  //   return Object.keys(data)
  //     .map(
  //       (key: number) =>
  //         encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  //     )
  //     .join('&')
  // }

  const handleSubmit = (e: Event) => {
    setFormState('processing...')
    setDis(true)
    const form = e.target
    fetch(BASE_URL + ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: 'Token df8cf218-3976-4e75-9ee6-017a6ffe2d4f',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: `${email}` }),
    })
      .then((res) => {
        if (!res.ok) throw new Error()
        alert(
          'Wait a sec, your data is collected. Sharpview will reach back to you soon. Bye!!!'
        )
      })
      .catch((err) => alert(err))
  }
  return (
    <Container bg="bg-ibtc-light-yellow">
      <div className="flex flex-col items-center justify-center min-h-[25rem] gap-[4rem]">
        <div className="space-y-[1rem] lg:text-center">
          <h2 className="_header text-ibtc-black">Stay up to date with Us!</h2>
          <p className="text-ibtc-grey-2">
            Subscribe to our newsletter for latest news, projects and updates
          </p>
        </div>

        <div className="w-full items-center flex flex-col lg:flex-row justify-center lg:px-4 gap-[1.15rem] sm:max-w-[400px] lg:max-w-full">
          <input
            type="email"
            onChange={handleChange}
            value={email}
            name="email"
            placeholder="Enter your email"
            aria-label="Enter your email"
            className="bg-transparent w-full border border-[#BDBDBD] rounded-[6px] h-[3rem] lg:h-[3.5rem] lg:max-w-[28rem] px-2 placeholder:text-[#828282] outline-4 outline-transparent outline-offset-[6px] focus:outline-ibtc-blue"
          />
          <span className="w-full lg:w-fit h-[3rem] lg:h-[3.5rem]">
            <Button
              onClick={handleSubmit}
              type="button"
              style={{
                color: 'text-ibtc-grey',
                background: 'bg-ibtc-black',
              }}
            >
              Subscribe Now
            </Button>
          </span>
        </div>
      </div>
      <SquiggleLeft className="absolute left-0 bottom-0 hidden lg:block" />
      <SquiggleRight className="absolute right-0 bottom-0 hidden lg:block" />
    </Container>
  )
}

export default SubscribeNewsLetter
