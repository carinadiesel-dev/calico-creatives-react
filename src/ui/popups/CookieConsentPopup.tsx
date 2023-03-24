import React from 'react'
import {useCookies} from 'react-cookie'

type CookieConsentPopupProps = {}
export const CookieConsentPopup = ({}: CookieConsentPopupProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-consent']);
  if(cookies['cookie-consent'] === 'yes') {
    return null;
  }

  return <div className="fixed bottom-0 left-0 w-[320px] px-6 py-6">
    <div className="bg-white px-4 py-6 border border-gray-600">
      <h4 className="text-xl mb-2">We use cookies</h4>
      <p className="mb-2">Cookies help us deliver the best experience on our website. By using our website you agree to the use of cookies.</p>
      <button
        onClick={() => setCookie('cookie-consent', 'yes', {
          path: "/",
          maxAge: 60 * 60 * 24  // seconds
        })}
        className="flex items-center justify-center px-6 py-4 w-full h-[40px] text-uppercase border border-gray-600">Accept</button>
    </div>
  </div>;
}