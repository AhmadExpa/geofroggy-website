import AboutNewsLetter from '@/components/aboutComponents/AboutNewsLetter'
import OurMission from '@/components/aboutComponents/OurMission'
import OurPhilosophy from '@/components/aboutComponents/OurPhilosophy'
import OurStats from '@/components/aboutComponents/OurStats'
import OurVision from '@/components/aboutComponents/OurVision'
import PageHero from '@/components/common/PgaeHero'
import ContactForm from '@/components/contactComponents/ContactForm'
import GetInvolvedSection from '@/components/getInvolved/GetInvolvedSection'
import React from 'react'

function page() {
    return (
        <main>
            <PageHero title="Behind The Frog" subTitle="Heart of Geofroggy" Bg={"/images/about/hero.png"} />
            <OurPhilosophy />
            <OurStats />
            <OurMission />
            <OurVision />
            <AboutNewsLetter />

        </main>
    )
}

export default page