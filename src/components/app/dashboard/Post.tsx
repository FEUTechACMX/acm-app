import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    Image
} from "@nextui-org/react";
const DasboardPost = () => {
    return (
        <Card className="w-full" radius="none">
            <CardHeader className="flex gap-2">
                <Image
                    alt="acm logo"
                    height={40}
                    radius="sm"
                    src="/android-chrome-192x192.png"
                    width={40}
                />
                <ButtonGroup className="grid grid-cols-1 gap-2 w-full" radius="sm">
                    <Button variant="ghost" className="text-base">
                        What's going down, ACM?
                    </Button>
                </ButtonGroup>
            </CardHeader>
        </Card>
    );
};

export default DasboardPost;