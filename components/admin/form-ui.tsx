"use client"

import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

// Small form building blocks shared by the admin pages

export const Field = ({ label, hint, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string }) => {
  const [visible, setVisible] = useState(false)
  const isPassword = props.type === "password"

  return (
    <div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-primary/70">{label}</span>
        <span className="relative block">
          <input
            {...props}
            type={isPassword && visible ? "text" : props.type}
            className={`w-full rounded-xl border-2 border-gray-100 bg-[#FAFAF7] px-4 py-3 text-base text-primary outline-none transition focus:border-accent/50 focus:bg-white disabled:opacity-60 ${isPassword ? "pr-12" : ""}`}
          />
          {/* Show / hide the password so people can check what they typed */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              aria-label={visible ? "Hide password" : "Show password"}
              aria-pressed={visible}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-primary/50 transition hover:text-primary"
            >
              {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          )}
        </span>
      </label>
      {hint && <span className="mt-1.5 block text-xs text-muted">{hint}</span>}
    </div>
  )
}

export const PrimaryButton = ({ busy, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { busy?: boolean }) => (
  <button
    {...props}
    disabled={busy || props.disabled}
    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-black uppercase tracking-widest text-white transition hover:bg-accent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
  >
    {busy && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />}
    {children}
  </button>
)

export const Notice = ({ tone, children }: { tone: "error" | "success" | "info"; children: React.ReactNode }) => (
  <p
    role={tone === "error" ? "alert" : "status"}
    className={
      tone === "error"
        ? "rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700"
        : tone === "success"
          ? "rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-primary"
          : "rounded-xl border border-gray-100 bg-[#FAFAF7] px-4 py-3 text-sm text-primary/80"
    }
  >
    {children}
  </p>
)

type AuthErrorLike = { message?: string; status?: number; code?: string }

// The sign-in client throws on failed requests (wrong password, bad code...),
// so every call goes through this to get a plain { error } result instead
export async function callAuth<T>(request: () => Promise<{ data?: T; error?: AuthErrorLike | null }>) {
  try {
    const result = await request()
    return { data: result.data, error: result.error ?? null }
  } catch (error) {
    const e = (error ?? {}) as AuthErrorLike
    return { data: undefined, error: { message: e.message, status: e.status, code: e.code } }
  }
}

// Turns an auth error into a sentence a non-technical user can act on
export const authErrorMessage = (error: AuthErrorLike | null | undefined) => {
  if (!error) return "Something went wrong. Please try again."
  const code = (error.code ?? "").toLowerCase()
  if (code === "invalid_credentials" || code === "invalid_email_or_password" || error.status === 401) {
    return "That email and password don't match."
  }
  if (code === "user_already_exists" || code === "email_exists" || code.startsWith("user_already_exists")) {
    return "An account with this email already exists. Sign in instead, or reset your password."
  }
  if (code === "weak_password" || code === "password_too_short") return "Your password must be at least 8 characters."
  if (code.includes("otp")) return "That code is wrong or has expired. Request a new one."
  if (error.status === 429) return "Too many attempts. Please wait a minute and try again."
  return error.message || "Something went wrong. Please try again."
}

export const isUnverifiedEmail = (error: AuthErrorLike | null | undefined) =>
  error?.code === "email_not_confirmed" || error?.code === "EMAIL_NOT_VERIFIED" || error?.status === 403
