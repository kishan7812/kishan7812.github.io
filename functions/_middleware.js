// Cloudflare Pages Middleware: Markdown for Agents & RFC Negotiation
// Handles requests with 'Accept: text/markdown' by serving the markdown documentation

export async function onRequest(context) {
  const { request, next } = context;
  const acceptHeader = request.headers.get("Accept") || "";

  // If the client explicitly requests Markdown
  if (acceptHeader.includes("text/markdown")) {
    const url = new URL(request.url);
    const mdUrl = new URL("/llms-full.txt", url.origin);
    const mdResponse = await fetch(mdUrl.toString());

    if (mdResponse.ok) {
      const markdownContent = await mdResponse.text();
      return new Response(markdownContent, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Vary": "Accept",
          "Access-Control-Allow-Origin": "*",
          "x-markdown-tokens": "1850"
        }
      });
    }
  }

  // Otherwise, proceed to standard HTML response with Vary: Accept
  const response = await next();
  const newHeaders = new Headers(response.headers);
  newHeaders.set("Vary", "Accept");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}
