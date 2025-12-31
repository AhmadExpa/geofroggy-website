import PageHero from '@/components/common/PgaeHero'
import WhatCopedia from '@/components/copediaComponents/WhatCopedia'
import Subscription from '@/components/copediaComponents/Subscription'
import PeopleLove from '@/components/copediaComponents/PeopleLove'
import CulturalInsights from '@/components/copediaComponents/CulturalInsights'
import React from 'react'

function page() {
    return (
        <main>
            <PageHero title="Copedia Geofroggy" subTitle="Culture in Your Inbox" Bg={"/images/bg1.jpg"} />
            <WhatCopedia />
            <Subscription />
            <PeopleLove />
            <CulturalInsights />
        </main>
    )
}

export default page