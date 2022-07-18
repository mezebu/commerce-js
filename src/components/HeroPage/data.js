import { v4 as uuidv4 } from "uuid";
import SavingsIcon from "@mui/icons-material/Savings";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const locationImages = [
  {
    id: uuidv4(),
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&h=250&q=60",
    link: "Shop Now",
    label: "SPECIAL OFFER",
    headerText: "Comfortable Original Cotton Nike Sneakers",
    desc: `Get laced up for training, sport and lifestyle with the latest designs of men's shoes from Nike.com`,
  },
  {
    id: uuidv4(),
    url: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=400&h=250&q=60",
    link: "Shop Now",
    label: "SPECIAL OFFER",
    headerText: "Chuck Taylor All Star Seasonal Converse",
    desc: `The best ever Chuck 70, in premium recycled poly-canvas and new,shades inspired by colors found in nature.`,
  },
  {
    id: uuidv4(),
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=400&h=250&q=80",
    link: "Shop Now",
    label: "SPECIAL OFFER",
    headerText: "New Balance Fresh Foam Roav Tee Shirt",
    desc: `Re-energize your step in the versatile New Balance® NB Sport sneakers.Performance-inspired sleek design`,
  },
  {
    id: uuidv4(),
    url: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=400&h=250&q=60",
    link: "Shop Now",
    label: "SPECIAL OFFER",
    headerText: "Adidas Mens Original NMD_R1 V2 SHOES",
    desc: `Time isn't slowing down.It seems to be moving at hyper-speed.And the shoes are built on a foundation of speed`,
  },
];

export const widgetsItems = [
  {
    id: uuidv4(),
    icon: <LocalShippingIcon sx={{ fontSize: 50 }} />,
    title: "Fast Delivery",
    subTitle: "Start from $5",
  },
  {
    id: uuidv4(),
    icon: <SavingsIcon sx={{ fontSize: 50 }} />,
    title: "Money Guarantee",
    subTitle: "7 Days back",
  },
  {
    id: uuidv4(),
    icon: <TimerOutlinedIcon sx={{ fontSize: 50 }} />,
    title: "60 Days",
    subTitle: "For free return",
  },
  {
    id: uuidv4(),
    icon: <CreditScoreRoundedIcon sx={{ fontSize: 50 }} />,
    title: "Payment",
    subTitle: "Secure system",
  },
];
