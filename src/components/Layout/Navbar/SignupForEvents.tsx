import * as React from 'react'
import Button from '@/components/Button/button'

export const JoinOneOfOurEvent = ({
  active,
  toggleNotification,
  message,
}: {
  active: string | null
  toggleNotification: () => void
  message: string
}) => {
  return Boolean(active) ? (
    <div className="bg-ibtc-blue/90 flex items-center justify-end text-white text-sm">
      <div className="w-full lg:w-fit px-2">
        <div className="grid grid-cols-[1fr_4rem] lg:grid-rows-1 lg:grid-cols-[1fr_1fr_4rem] py-2 items-center">
          <p className="order-1 lg:order-2">{message}</p>
          <div
            className="w-fit order-3 lg:ml-6 lg:order-2"
            onClick={toggleNotification}
          >
            <Button
              href="/signup-to-our-events"
              style={{
                background: 'bg-black',
                color: 'text-white',
                fontSize: 'text-sm',
              }}
            >
              {`🍿 Signup to one of events`}
            </Button>
          </div>
          <button
            className="border-2 border-ibtc-offwhite w-10 h-10 ml-auto order-2 lg:order-3"
            onClick={toggleNotification}
          >
            x
          </button>
        </div>
      </div>
    </div>
  ) : null
}
