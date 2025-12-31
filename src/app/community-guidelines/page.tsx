import PageHero from '@/components/common/PgaeHero'
import ContactForm from '@/components/contactComponents/ContactForm'
import CommunityGuidelines from '@/components/FAQComponents/CommunityGuidelines'
import GetInvolvedSection from '@/components/getInvolved/GetInvolvedSection'
import React from 'react'

function page() {
    return (
        <main>
            <PageHero subTitle="Community Guidelines" tagLine={"Home → Community Guidelines"} Bg={"/images/heroImg.png"} gradientOverlay={true} />
            <CommunityGuidelines />

        </main>
    )
}

export default page