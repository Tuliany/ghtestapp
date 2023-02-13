import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Home, RssFeed, Contacts, ManageSearch } from "@mui/icons-material/";
import useData from "../../pages/api/data";
import { NavItem } from "./NavItem";

export const MenuBar = () => {
  const data = useData();
  let items = [];

  if (data) {
    const navigationPath = data.navigation.mainMenu;
    console.log(navigationPath);
    navigationPath.forEach((item) => {
      console.log(item.url);
      items.push({
        href: item.url,
        icon: null,
        title: item.name,
      });
    });
  }
  
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
