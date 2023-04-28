import withAuth from '@/auth/auth'

export { default } from '@/views/Auth'
export const getServerSideProps = withAuth(() => ({}), true);