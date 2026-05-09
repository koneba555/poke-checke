import { createHash } from "crypto";

export const runtime = "nodejs";

// eBay Marketplace Account Deletion endpoint
// GET: verify endpoint ownership
// POST: receive deletion notifications (we don't store user data, so just return 200)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const challengeCode = searchParams.get("challenge_code");

  if (!challengeCode) {
    return Response.json({ error: "missing challenge_code" }, { status: 400 });
  }

  const verificationToken = process.env.EBAY_VERIFICATION_TOKEN;
  const endpoint = process.env.EBAY_NOTIFICATION_ENDPOINT;

  if (!verificationToken || !endpoint) {
    return Response.json({ error: "not configured" }, { status: 500 });
  }

  // Hash: SHA-256(challengeCode + verificationToken + endpoint)
  const hash = createHash("sha256")
    .update(challengeCode + verificationToken + endpoint)
    .digest("hex");

  return Response.json({ challengeResponse: hash });
}

export async function POST() {
  // We don't store any eBay user data, nothing to delete
  return new Response(null, { status: 200 });
}
