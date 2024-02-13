import { Button, Card, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";

const DashboardFilter = () => {
    return (
        <Card className="w-full" radius="none">
            <ButtonGroup className="grid grid-cols-3 gap-2 w-full p-2" radius="sm">
                <Button variant="ghost" className="text-base" radius="none">
                    All
                </Button>
                <Button variant="ghost" className="text-base" radius="none">
                    My Posts
                </Button>

                <Dropdown radius="none">
                    <DropdownTrigger>
                        <Button variant="bordered">Filter</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Link Actions">
                        <DropdownItem key="home">
                            General
                        </DropdownItem>
                        <DropdownItem key="about">
                            About
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>
        </Card>
    );
};

export default DashboardFilter;