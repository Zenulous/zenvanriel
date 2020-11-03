import * as React from "react";
import DefaultNavbar from "../components/DefaultNavbar";
import { CenteredFlexBox } from "../styles/CenteredFlexBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import DefaultFooter from "../components/DefaultFooter";

export default function NotFoundPage() {
  return (
    <div>
      <DefaultNavbar />
      <div className="container">
        <CenteredFlexBox>
          <FontAwesomeIcon icon={faSadTear} size="10x"></FontAwesomeIcon>
          <p>Oopsie! I can't find this page.</p>
        </CenteredFlexBox>
      </div>
      <DefaultFooter />
    </div>
  );
}
