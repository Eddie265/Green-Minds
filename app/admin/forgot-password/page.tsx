"use client"

import React, { useState } from "react"
import Link from "next/link"
import { authClient } from "@/lib/auth/client"
import AuthShell from "@/components/admin/AuthShell"
import { authErrorMessage, callAuth, Field, Notice, PrimaryButton } from "@/components/admin/form-ui"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState<"email" | "reset" | "done">("email")

  const sendCode = async (event: React.FormEvent) => {
    event.preventDefault()
    setBusy(true)
    setError("")
    const { error } = await callAuth(() => authClient.emailOtp.sendVerificationOtp({ email: email.trim(), type: "forget-password" }))
    setBusy(false)
    if (error) return setError(authErrorMessage(error))
    setStep("reset")
  }

  const reset = async (event: React.FormEvent) => {
    event.preventDefault()
    if (password.length < 8) return setError("Your password must be at least 8 characters.")
    setBusy(true)
    setError("")
    const { error } = await callAuth(() => authClient.emailOtp.resetPassword({ email: email.trim(), otp: code.trim(), password }))
    setBusy(false)
    if (error) return setError(authErrorMessage(error))
    setStep("done")
  }

  return (
    <AuthShell title="Reset your password" intro="We'll email you a code to set a new password.">
      {step === "email" && (
        <form onSubmit={sendCode} className="space-y-5">
          <Field label="Email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} />
          {error && <Notice tone="error">{error}</Notice>}
          <PrimaryButton type="submit" busy={busy}>Email me a code</PrimaryButton>
        </form>
      )}

      {step === "reset" && (
        <form onSubmit={reset} className="space-y-5">
          <Notice tone="info">If an account exists for {email.trim()}, a 6-digit code is on its way. Check your spam folder too.</Notice>
          <Field
            label="Code"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            required
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            disabled={busy}
          />
          <Field
            label="New password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            hint="At least 8 characters."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={busy}
          />
          {error && <Notice tone="error">{error}</Notice>}
          <PrimaryButton type="submit" busy={busy}>Set new password</PrimaryButton>
        </form>
      )}

      {step === "done" && <Notice tone="success">Your password has been changed. You can now sign in.</Notice>}

      <p className="mt-6 text-center text-sm">
        <Link href="/admin/sign-in" className="font-bold text-accent hover:text-primary">Back to sign in</Link>
      </p>
    </AuthShell>
  )
}
