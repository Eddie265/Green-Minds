"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth/client"
import AuthShell from "@/components/admin/AuthShell"
import VerifyCode from "@/components/admin/VerifyCode"
import { authErrorMessage, callAuth, Field, Notice, PrimaryButton } from "@/components/admin/form-ui"

export default function SignUpPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState<"details" | "code">("details")

  const signUp = async (event: React.FormEvent) => {
    event.preventDefault()
    if (password.length < 8) return setError("Your password must be at least 8 characters.")
    setBusy(true)
    setError("")
    const { error } = await callAuth(() => authClient.signUp.email({ name: name.trim(), email: email.trim(), password }))
    setBusy(false)
    if (error) return setError(authErrorMessage(error))
    setStep("code")
  }

  if (step === "code") {
    return (
      <AuthShell title="Check your email" intro="Enter the code we sent to confirm your email address.">
        <VerifyCode
          email={email.trim()}
          onVerified={() => {
            router.push("/admin")
            router.refresh()
          }}
        />
      </AuthShell>
    )
  }

  return (
    <AuthShell
      title="Create an admin account"
      intro="Use the email address an existing admin added for you. Accounts for other addresses won't have access."
    >
      <form onSubmit={signUp} className="space-y-5">
        <Field label="Your name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} disabled={busy} />
        <Field label="Email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} />
        <Field
          label="Password"
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
        <PrimaryButton type="submit" busy={busy}>Create account</PrimaryButton>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        Already have an account? <Link href="/admin/sign-in" className="font-bold text-accent hover:text-primary">Sign in</Link>
      </p>
    </AuthShell>
  )
}
