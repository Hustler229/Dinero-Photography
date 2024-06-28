import Container from "@/ui/components/layout/container"
import Navigation from "@/ui/components/navbar/navigation"
import AboutComponent from "@/ui/interfaces/about"
import FeedBackSection from "@/ui/interfaces/clientFeedback"
import FooterSection from "@/ui/interfaces/footer"
import Galerie from "@/ui/interfaces/galerie"
import HomeComponent from "@/ui/interfaces/home"
import Section from "@/ui/interfaces/section"
import Work from "@/ui/interfaces/services"

const HomePage: React.FC = () => {

    return (
        <>
            <Container>
                <Navigation />
                <HomeComponent />
                <AboutComponent/>
                <Work/>
                <Section/>
                <Galerie/>
                <FeedBackSection/>
                <FooterSection/>
            </Container>
        </>
    )
}

export default HomePage
