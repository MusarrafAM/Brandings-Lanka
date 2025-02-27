import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <Tooltip title="Facebook" arrow>
        <a href="https://www.facebook.com/Brandingslanka.lk/">
          <FaFacebook size={30} color="3A589D" />
        </a>
      </Tooltip>

      <Tooltip title="Instagram" arrow>
        <a href="https://www.facebook.com/Brandingslanka.lk/">
          <FaInstagram size={30} color="E33C68" />
        </a>
      </Tooltip>

      <Tooltip title="TikTok" arrow>
        <a href="https://www.facebook.com/Brandingslanka.lk/">
          <FaTiktok size={30} color="111111" />
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialLinks;
