import PageHero from '@/components/common/PgaeHero'
import FAQ from '@/components/FAQComponents/FAQ'
import TermofUse from '@/components/FAQComponents/TermofUse'

function page() {
    return (
        <main>
            <PageHero subTitle="Frequently Asked Questions" tagLine={"Home → Frequently Asked Questions"} Bg={"/images/heroImg.png"} gradientOverlay={true} />
            <FAQ />

        </main>
    )
}

export default page