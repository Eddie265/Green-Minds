"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth/client"
import AuthShell from "@/components/admin/AuthShell"
import VerifyCode from "@/components/admin/VerifyCode"
import { authErrorMessage, callAuth, isUnverifiedEmail, Field, Notice, PrimaryButton } from "@/components/admin/form-ui"

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [needsCode, setNeedsCode] = useState(false)

  const goToAdmin = () => {
    router.push("/admin")
    router.refresh()
  }

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault()
    setBusy(true)
    setError("")
    const { error } = await callAuth(() => authClient.signIn.email({ email: email.trim(), password }))
    setBusy(false)
    if (!error) return goToAdmin()

    // Accounts must verify their email before they can sign in
    if (isUnverifiedEmail(error)) {
      await callAuth(() => authClient.emailOtp.sendVerificationOtp({ email: email.trim(), type: "email-verification" }))
      return setNeedsCode(true)
    }
    setError(authErrorMessage(error))
  }

  if (needsCode) {
    return (
      <AuthShell title="Verify your email" intro="Your email address needs to be confirmed before you can sign in.">
        <VerifyCode email={email.trim()} onVerified={goToAdmin} />
      </AuthShell>
    )
  }

  return (
    <AuthShell title="Admin sign in" intro="Sign in to update team photos and the Our Work galleries.">
      <form onSubmit={signIn} className="space-y-5">
        <Field label="Email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} />
        <Field label="Password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={busy} />
        {error && <Notice tone="error">{error}</Notice>}
        <PrimaryButton type="submit" busy={busy}>Sign in</PrimaryButton>
      </form>
      <div className="mt-6 flex flex-col items-center gap-2 text-sm">
        <Link href="/admin/forgot-password" className="font-bold text-accent hover:text-primary">Forgot your password?</Link>
        <p className="text-muted">
          New team member? <Link href="/admin/sign-up" className="font-bold text-accent hover:text-primary">Create an account</Link>
        </p>
      </div>
    </AuthShell>
  )
}
