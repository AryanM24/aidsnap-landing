export const dynamic = "force-static"

export function GET() {
  const body = `Contact: mailto:aryan.mittal@aidsnap.com
Expires: 2027-11-17T00:00:00.000Z
Preferred-Languages: en
Canonical: https://www.aidsnap.com/.well-known/security.txt
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
