import { Image, Link } from "@ace-ex/react";

export const Logo = () => {
  return (
    <Link
      href="https://ace-ex-ui.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir página inicial da AceEx UI em uma nova tab."
    >
      <Image
        alt="AceEx UI Logo"
        src="/logo-light.svg"
        css={{ width: "$40", my: "$5" }}
      />
    </Link>
  );
};
