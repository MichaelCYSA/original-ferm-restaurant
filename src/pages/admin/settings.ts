import Settings from "@/views/Admin/Settings";
import withAuth from "@/auth/auth";

export default Settings;
export const getServerSideProps = withAuth();
