import { Button, Card } from "@nextui-org/react";
const goToTop = () => {
    window.scrollTo({
        top: 0,
    });
};
const DashboardB2T = () => {
    return (
        <Card className="w-full" radius="none">
            <Button
                onClick={goToTop}
                className="bg-transparent h-auto p-2  text-base w-full text-balance whitespace-normal block"
                radius="none"
                disableAnimation
            >
                There are no more posts to show.
                Click here to go back to the top.
            </Button>
        </Card>
    );
};

export default DashboardB2T;