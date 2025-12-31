import PageHero from '@/components/common/PgaeHero'
import PrivacyPolicy from '@/components/FAQComponents/PrivatePolicy'

function page() {
    return (
        <main>
            <PageHero subTitle="Privte Policy" Bg={"/images/heroImg.png"} gradientOverlay={true} tagLine={"Home → Private Policy"} />
            <PrivacyPolicy />

        </main>
    )
}

export default page