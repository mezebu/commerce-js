import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import {
  Wrapper,
  BannerItems,
  BannerText,
  BannerContents,
  BannerLinks,
} from "./styles";

const TopBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Wrapper>
      <Container maxWidth="xl">
        {isMobile ? (
          <BannerItems>
            <BannerContents>
              <BannerText>Logo</BannerText>
            </BannerContents>
            <BannerContents>
              <EmailIcon fontSize="small" sx={{ mr: 1, ml: 2 }} />
              <BannerText>mezebu07@gmail.com</BannerText>
            </BannerContents>
          </BannerItems>
        ) : (
          <BannerItems>
            <BannerContents>
              <LocalPhoneIcon fontSize="small" sx={{ mr: 1 }} />
              <BannerText>+23401234567</BannerText>
              <EmailIcon fontSize="small" sx={{ mr: 1, ml: 2 }} />
              <BannerText>mezebu07@gmail.com</BannerText>
            </BannerContents>
            <BannerContents>
              <BannerLinks href="#" underline="hover">
                Theme FAQ's
              </BannerLinks>
              <BannerLinks href="#" underline="hover">
                Need Help?
              </BannerLinks>
            </BannerContents>
          </BannerItems>
        )}
      </Container>
    </Wrapper>
  );
};

export default TopBanner;
