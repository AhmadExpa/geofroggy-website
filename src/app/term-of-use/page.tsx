import PageHero from '@/components/common/PgaeHero'
import TermofUse from '@/components/FAQComponents/TermofUse'

function page() {
    return (
        <main>
            <PageHero subTitle="Term of Use" Bg={"/images/heroImg.png"} gradientOverlay={true} tagLine={"Home → Term of Use"} />
            <TermofUse />

        </main>
    )
}

export default page