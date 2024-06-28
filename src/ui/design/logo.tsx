import Image from "next/image";
import Text from "./typography";

interface Props {
    size?: 'small' | 'large'
}

const Logo = ({ size = 'small' }: Props) => {
    let logo = null

    switch (size) {
        case 'small':
            logo = <>
                <div>
                    <Text color="secondary" tag="span" variant="lead-md">
                        Dinero
                    </Text>
                    <Text color="blue" tag="span" variant="body-md">
                        Photographie
                    </Text>
                </div>
            </>
            break;
        case 'large':
            logo = <>
                <div>
                    <Text color="secondary" tag="span">
                        Dinero
                    </Text>
                    <Text color="blue" tag="span" variant="body">
                        Photographie
                    </Text>
                </div>
            </>
            break;

    }

    return (<>
        {logo}
    </>)
}

export default Logo