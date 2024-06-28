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
                        <a href="#home">Dinero</a>
                    </Text>
                    <Text color="blue" tag="span" variant="body-md">
                        <a href="#home">Photographie</a>
                    </Text>
                </div>
            </>
            break;
        case 'large':
            logo = <>
                <div>
                    <a href="#home">
                        <Text color="secondary" tag="span">
                            Dinero
                        </Text>
                        <Text color="blue" tag="span" variant="body">
                            Photographie
                        </Text>
                    </a>
                </div>
            </>
            break;

    }

    return (<>
        {logo}
    </>)
}

export default Logo