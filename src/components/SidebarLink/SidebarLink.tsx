import { NavLink } from "react-router-dom";

interface ISidebarLink {
  iconUrl: string;
  linkTitle: string;
  onlineCount?: number;
}
function SidebarLink({ iconUrl, linkTitle, onlineCount }: ISidebarLink) {
  return (
    <NavLink to={linkTitle} className="sidebar-link">
      <img src={iconUrl} alt={linkTitle} />
      <p>{linkTitle}</p>
      {onlineCount && <span>{onlineCount}</span>}
    </NavLink>
  );
}

export default SidebarLink;
