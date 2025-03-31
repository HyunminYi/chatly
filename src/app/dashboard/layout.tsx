import { ReactNode } from 'react'

const Layout = ({children} : {children: ReactNode}) => {
  return (
      <>
        <div>dashboard/layout</div>
        {children}
      </>
  );
};

export default Layout;
