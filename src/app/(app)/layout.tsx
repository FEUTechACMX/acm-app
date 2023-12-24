import ChildrenProps from 'types/ChildrenProps';
import AppLayoutNav from '@/components/(app)/layout/nav';
const AppLayout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <>
            <AppLayoutNav />
            {children}
        </>
    );
};

export default AppLayout;