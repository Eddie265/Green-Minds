"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { LogOut } from "lucide-react"
import { authClient } from "@/lib/auth/client"

const SignOutButton = ({ compact = false }: { compact?: boolean }) => {
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  const signOut = async () => {
    setBusy(true)
    await authClient.signOut()
    router.push("/admin/sign-in")
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={signOut}
      disabled={busy}
      className={
        compact
          ? "inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-bold text-primary hover:border-accent hover:text-accent disabled:opacity-60 transition"
          : "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-100 px-5 py-3 text-sm font-bold text-primary hover:border-accent/40 disabled:opacity-60 transition"
      }
    >
      <LogOut className="h-4 w-4" />
      {busy ? "Signing out..." : "Sign out"}
    </button>
  )
}

export default SignOutButton
