import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aurex Security Services | SIA Licensed UK Security Company" },
      { name: "description", content: "Aurex Security (AX) delivers SIA licensed manned guarding, CCTV monitoring, event and corporate security across the UK. 24/7 response, fully insured." },
      { name: "author", content: "Aurex Security Services" },
      { name: "theme-color", content: "#0c0f1a" },
      { property: "og:title", content: "Aurex Security Services | SIA Licensed UK Security Company" },
      { property: "og:description", content: "Aurex Security (AX) delivers SIA licensed manned guarding, CCTV monitoring, event and corporate security across the UK. 24/7 response, fully insured." },
      { property: "og:site_name", content: "Aurex Security" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@AurexSecurity" },
      { name: "twitter:title", content: "Aurex Security Services | SIA Licensed UK Security Company" },
      { name: "twitter:description", content: "Aurex Security (AX) delivers SIA licensed manned guarding, CCTV monitoring, event and corporate security across the UK. 24/7 response, fully insured." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/386dd9ca-2aeb-4d41-92d1-141b4e80d86c/id-preview-45859c5a--09dc4dce-69b3-4018-96a8-42991f801a6e.lovable.app-1780489461367.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/386dd9ca-2aeb-4d41-92d1-141b4e80d86c/id-preview-45859c5a--09dc4dce-69b3-4018-96a8-42991f801a6e.lovable.app-1780489461367.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SecurityService",
          name: "Aurex Security Services",
          alternateName: "AX Security",
          areaServed: "United Kingdom",
          telephone: "+44 20 4525 8800",
          email: "info@aurexsecurity.co.uk",
          url: "/",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(d,t){var v=d.createElement(t),s=d.getElementsByTagName(t)[0];v.onload=function(){window.voiceflow.chat.load({verify:{projectID:'6a39799e9e16686a834da714'},url:'https://general-runtime.voiceflow.com',voice:{url:'https://runtime-api.voiceflow.com'},theme:{position:'right',sideSpacing:20,bottomSpacing:95}})};v.src='https://cdn.voiceflow.com/widget-next/bundle.mjs';v.type='text/javascript';s.parentNode.insertBefore(v,s)})(document,'script');`,
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}
