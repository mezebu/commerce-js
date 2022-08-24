import React from "react";
import { Container, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

// prettier-ignore
import { Wrapper, FooterItems, FooterText, FooterContents, FooterLinks,} from "./styles";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Wrapper component={Paper}>
      <Container maxWidth="xl">
        {isMobile ? (
          <FooterItems>
            <FooterContents>
              <FooterText>Henry's Store</FooterText>
            </FooterContents>
            <FooterContents>
              <EmailIcon fontSize="small" sx={{ mr: 1, ml: 2 }} />
              <FooterText>mezebu07@gmail.com</FooterText>
            </FooterContents>
          </FooterItems>
        ) : (
          <FooterItems>
            <FooterContents>
              <LocalPhoneIcon fontSize="small" sx={{ mr: 1 }} />
              <FooterText>+23401234567</FooterText>
              <EmailIcon fontSize="small" sx={{ mr: 1, ml: 2 }} />
              <FooterText>mezebu07@gmail.com</FooterText>
            </FooterContents>
            <FooterContents>
              <FooterLinks href="#" underline="hover">
                Theme FAQ's
              </FooterLinks>
              <FooterLinks href="#" underline="hover">
                Need Help?
              </FooterLinks>
            </FooterContents>
          </FooterItems>
        )}
      </Container>
    </Wrapper>
  );
};

export default Footer;
