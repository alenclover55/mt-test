import { Link } from "react-router-dom";
import SidebarLink from "../SidebarLink/SidebarLink";

const linksArray = [
  {
    iconUrl: "./lenta.svg",
    linkTitle: "Лента",
  },
  { iconUrl: "./compass.svg", linkTitle: "Каналы" },
  { iconUrl: "./video.svg", linkTitle: "Видео" },
  { iconUrl: "./bookmark.svg", linkTitle: "Сохранённое" },
  { iconUrl: "./video.svg", linkTitle: "Уведомления", onlineCount: 1 },
  { iconUrl: "./chat.svg", linkTitle: "Чаты", onlineCount: 1 },
];
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to={"/"}>
          <img src="./logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="link-group">
        {linksArray.map(({ iconUrl, linkTitle, onlineCount }) => (
          <SidebarLink
            key={iconUrl}
            iconUrl={iconUrl}
            linkTitle={linkTitle}
            onlineCount={onlineCount}
          />
        ))}
      </div>
      <div className="sidebar-footer">
        <Link to={"/"} className="sidebar-footer-link">
          <img src="./info.svg" alt="info" />О компании...
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
