// Cloudflare Pages Middleware: Markdown for Agents, Agent-friendly 404s & RFC Negotiation
// Handles requests with 'Accept: text/markdown' by serving markdown content

export async function onRequest(context) {
  const { request, next } = context;
  const acceptHeader = request.headers.get("Accept") || "";
  const isMarkdownRequest = acceptHeader.includes("text/markdown") || acceptHeader.includes("text/x-markdown");
  const url = new URL(request.url);

  // If client requests Markdown
  if (isMarkdownRequest) {
    // 1. If it's a known or root route, return the full profile markdown
    const knownPaths = ["", "/", "/about", "/about/", "/contact", "/contact/", "/projects", "/projects/", "/experience", "/experience/", "/education", "/education/", "/achievements", "/achievements/", "/developers", "/developers/"];
    
    if (knownPaths.includes(url.pathname)) {
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
  }

  // Otherwise, proceed to standard response pipeline
  const response = await next();
  const newHeaders = new Headers(response.headers);
  newHeaders.set("Vary", "Accept");

  // Check for 404 response
  if (response.status === 404) {
    if (isMarkdownRequest) {
      const markdown404 = `# Error 404: Resource Not Found\n\nThe requested endpoint \`${url.pathname}\` does not exist on kishanm.me.\n\n### Available Resources:\n- Developer Documentation & LLM profile: [https://kishanm.me/llms.txt](https://kishanm.me/llms.txt)\n- Full Knowledge Graph: [https://kishanm.me/llms-full.txt](https://kishanm.me/llms-full.txt)\n- XML Sitemap: [https://kishanm.me/sitemap.xml](https://kishanm.me/sitemap.xml)\n- Developer Portal: [https://kishanm.me/developers](https://kishanm.me/developers)\n- Contact Kishan M. Patil: [https://kishanm.me/contact](https://kishanm.me/contact)\n`;

      return new Response(markdown404, {
        status: 404,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Vary": "Accept",
          "Access-Control-Allow-Origin": "*",
          "x-markdown-tokens": "85"
        }
      });
    }
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}
