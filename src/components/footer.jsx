import ContentWrapper from "./ContentWrapper";
import { lato } from "./fonts";

export default function Footer() {
  return (
    <>
      <ContentWrapper
        className={`pb-4 pt-0 lg:pb-5 lg:pt-0 text-center text-sm ${lato.className}`}
        tag="footer"
      >
        <hr className="pt-4 lg:pt-5" />
        <p>Copyright © 2024. All rights reserved.</p>
        <p>
          <a href="https://ramonmagallon.com/" target="_blank">
            Ramon Magallon
          </a>
        </p>
      </ContentWrapper>
    </>
  );
}
