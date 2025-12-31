import PageHero from '@/components/common/PgaeHero'
import GetInvolvedSection from '@/components/getInvolved/GetInvolvedSection'
import React from 'react'

function page() {
    return (
        <main>
            <PageHero title="Get Involved with Geofroggy" subTitle="Connect with Community" Bg={"/images/getInvolved/hero.png"} />

            <GetInvolvedSection />

        </main>
    )
}

export default page