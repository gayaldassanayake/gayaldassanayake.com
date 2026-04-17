"use client";

interface RedditEmbedProps {
  postUrl: string;
  height?: number;
}

export function RedditEmbed({ postUrl, height = 500 }: RedditEmbedProps) {
  const embedUrl =
    postUrl.replace("www.reddit.com", "www.redditmedia.com") +
    "?ref_source=embed&ref=share&embed=true";

  return (
    <div className="not-prose my-8">
      <iframe
        src={embedUrl}
        height={height}
        width="100%"
        style={{ border: "none", borderRadius: "8px" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
        loading="lazy"
        title="Reddit post embed"
      />
    </div>
  );
}
