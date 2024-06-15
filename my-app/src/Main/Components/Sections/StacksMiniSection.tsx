import { WrapItem, Avatar } from "@chakra-ui/react";
type StacksMiniSectionProps = {
    name: string;
    imageSrc: string;
}

const StacksMiniSection = ({name, imageSrc}: StacksMiniSectionProps) => {

    return(
        <>
        <WrapItem>
            <Avatar size='lg' name={name} src={imageSrc} />
        </WrapItem>
        </>
    )
    
}
export default StacksMiniSection;