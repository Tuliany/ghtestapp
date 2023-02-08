import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Home, RssFeed, Contacts, ManageSearch } from "@mui/icons-material/";

import { NavItem } from "./NavItem";

const items = [
  {
    href: "/",
    icon: <Home />,
    title: "Home",
  },
  {
    href: "/blog",
    icon: <RssFeed />,
    title: "Blog",
  },
  {
    href: "/contact",
    icon: <Contacts />,
    title: "Contact",
  },
  {
    href: "/search",
    icon: <ManageSearch />,
    title: "Search",
  },
];

export const MenuBar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

MenuBar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
