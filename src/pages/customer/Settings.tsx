import { Outlet } from "react-router-dom";
import TopBar from "../../components/customer/services/top-bar/TopBar";
import SettingsLink from "../../components/customer/settings/SettingsLink";

function Settings() {
  return (
    <div className="overflow-x-hidden h-max pb-20">
      <TopBar isSettingDisabled={true} />

      <div className="xl:mt-[8.651474530831099vh]  lg:mt-[9.651474530831099vh] xs:mt-[9.051474530831099vh] xl:px-36 lg:px-32 xs:px-5">
        <SettingsLink />
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;