import { redirect } from "next/navigation"
import { getAdminList, getAdminState } from "@/lib/admin"
import { getGalleryRows, getPeopleRows } from "@/lib/content"
import AuthShell from "@/components/admin/AuthShell"
import SignOutButton from "@/components/admin/SignOutButton"
import AdminDashboard from "@/components/admin/AdminDashboard"

// Depends on who is signed in, so it is always rendered per request
export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const state = await getAdminState()

  if (state.status === "signed-out" || state.status === "unverified") redirect("/admin/sign-in")

  if (state.status === "not-allowed") {
    return (
      <AuthShell
        title="Waiting for access"
        intro={`You're signed in as ${state.email}, but this address hasn't been given admin access yet.`}
      >
        <p className="mb-6 text-sm leading-relaxed text-muted">
          Ask an existing Green Minds admin to add your email address under <strong>Admins</strong>, then reload this page.
        </p>
        <SignOutButton />
      </AuthShell>
    )
  }

  const [people, photos, admins] = await Promise.all([
    getPeopleRows(),
    getGalleryRows(),
    getAdminList(),
  ])

  return (
    <AdminDashboard
      admin={{ email: state.email, name: state.name }}
      people={people}
      photos={photos}
      admins={admins}
    />
  )
}
