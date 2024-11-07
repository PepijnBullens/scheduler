import type { Metadata } from "next";
import '../styles/style_sign_in.css';
import GoogleReCaptchaWrapper from "../../components/signIn/GoogleCaptchaWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <GoogleReCaptchaWrapper>
          {children}
        </GoogleReCaptchaWrapper>
      </body>
    </html>
  );
}