import { defineConfig } from "@neon/config/v1";

// Neon services for the admin area: sign-in for staff, and a bucket that
// holds the photos they upload (publicly readable so the site can show them)
export default defineConfig({
  auth: true,
  buckets: {
    "site-images": { access: "public_read" },
  },
});
