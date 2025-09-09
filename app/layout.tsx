import "@/styles/globals.css";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { GithubIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Image } from "@heroui/image";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Minha Jóia SFC",
    description:
      "Cultura, história, agenda de eventos, empreendedores e oportunidades em São Francisco do Conde (BA).",
    type: "website",
    locale: "pt_BR",
    siteName: "Minha Jóia SFC",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center gap-8">
              <section className="w-full flex justify-around items-center">
                <Image src="/logo.svg" className="mt-4" width={250} />
                <div>
                  <Link
                    isExternal
                    aria-label="Github"
                    href={siteConfig.links.github}
                  >
                    <GithubIcon className="text-default-500" />
                  </Link>
                  <Link
                    isExternal
                    aria-label="Github"
                    href={siteConfig.links.github}
                  >
                    <GithubIcon className="text-default-500" />
                  </Link>
                  <Link
                    isExternal
                    aria-label="Github"
                    href={siteConfig.links.github}
                  >
                    <GithubIcon className="text-default-500" />
                  </Link>
                </div>
              </section>
              <section>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  title="heroui.com homepage"
                >
                  <span className="text-default-600">
                    Desenvolvido e mantido por
                  </span>
                  <p className="text-primary">Diego França</p>
                </Link>
              </section>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
