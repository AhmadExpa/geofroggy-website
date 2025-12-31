import AdvertiseHero from '@/components/advertiseWithUs/AdvertiseHero'
import AdvertiseNewsLetter from '@/components/advertiseWithUs/AdvertiseNewsLetter'
import AdvertisingOpportunity from '@/components/advertiseWithUs/AdvertisingOpportunity'
import BuildSomething from '@/components/advertiseWithUs/BuildSomething'
import WhyAdvertise from '@/components/advertiseWithUs/WhyAdvertise'
import WorldStories from '@/components/advertiseWithUs/WorldStories'
import React from 'react'

function page() {
    return (
        <main>
            <AdvertiseHero />
            <WhyAdvertise />
            <WorldStories />
            <AdvertisingOpportunity />
            <BuildSomething />
            <AdvertiseNewsLetter />
        </main>
    )
}

export default page