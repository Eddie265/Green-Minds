"use client"

import React, { useState } from "react"
import { authClient } from "@/lib/auth/client"
import { authErrorMessage, callAuth, Field, Notice, PrimaryButton } from "@/components/admin/form-ui"

// Second step of sign-up (or of signing in before verifying): enter the
// 6-digit code that was emailed. Verifying also signs the person in.
const VerifyCode = ({ email, onVerified }: { email: string; onVerified: () => void }) => {
  const [code, setCode] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [notice, setNotice] = useState(
    `We emailed a 6-digit code to ${email}. It can take a minute to arrive; check your spam folder too.`,
  )

  const verify = async (event: React.FormEvent) => {
    event.preventDefault()
    setBusy(true)
    setError("")
    const { error } = await callAuth(() => authClient.emailOtp.verifyEmail({ email, otp: code.trim() }))
    setBusy(false)
    if (error) return setError(authErrorMessage(error))
    onVerified()
  }

  const resend = async () => {
    setError("")
    const { error } = await callAuth(() => authClient.emailOtp.sendVerificationOtp({ email, type: "email-verification" }))
    if (error) return setError(authErrorMessage(error))
    setNotice(`A new code is on its way to ${email}.`)
  }

  return (
    <form onSubmit={verify} className="space-y-5">
      <Notice tone="info">{notice}</Notice>
      <Field
        label="Verification code"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={6}
        required
        value={code}
        onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
        disabled={busy}
      />
      {error && <Notice tone="error">{error}</Notice>}
      <PrimaryButton type="submit" busy={busy}>Verify email</PrimaryButton>
      <button type="button" onClick={resend} className="w-full text-sm font-bold text-accent hover:text-primary">
        Send a new code
      </button>
    </form>
  )
}

export default VerifyCode
