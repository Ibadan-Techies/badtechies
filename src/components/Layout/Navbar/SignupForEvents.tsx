import * as React from 'react'
import Button from '@/components/Button/button'

export const JoinOneOfOurEvent = ({
  active,
  toggleNotification
}: {
  active: string | null
  toggleNotification: () => void
}) => {
  return Boolean(active) ? (
    <div className="bg-white/10 flex items-center justify-end text-white text-sm">
      <div className="w-full lg:w-fit px-2">
        <div className="grid grid-cols-[1fr_4rem] lg:grid-rows-1 lg:grid-cols-[1fr_1fr_4rem] py-2 items-center">
          <p className="order-1 lg:order-2">🍕🍕 Join us on one of a kind techies experience</p>
          <div className="w-fit order-3 lg:ml-6 lg:order-2">
            <Button
              href="/signup-to-our-events"
              style={{
                background: 'bg-black',
                color: 'text-white',
                fontSize: 'text-sm',
              }}
            >
              {`🍿 Signup to join us`}
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
