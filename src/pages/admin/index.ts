import withAuth from '@/auth/auth';
import AdminMainPage from '@/views/Admin/AdminMainPage';

export default AdminMainPage
export const getServerSideProps = withAuth();