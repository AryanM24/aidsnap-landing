export const dynamic = "force-static"

export function GET() {
  const body = `/* TEAM */
Team: AidSnap
Contact: aryan.mittal@aidsnap.com

/* SITE */
Site: Next.js, Tailwind CSS, Geist
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
