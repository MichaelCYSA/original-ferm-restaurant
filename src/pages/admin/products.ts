import withAuth from '@/auth/auth';
import Products from '@/views/Admin/Products';

export default Products
export const getServerSideProps = withAuth();