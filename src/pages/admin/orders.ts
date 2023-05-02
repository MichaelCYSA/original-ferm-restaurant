import OrderPage from "@/views/Admin/OrderPage";
import withAuth from '@/auth/auth';

export default OrderPage
export const getServerSideProps = withAuth();