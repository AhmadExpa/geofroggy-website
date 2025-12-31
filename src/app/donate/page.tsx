
import PageHero from '@/components/common/PgaeHero'
import MakeGift from '@/components/donateComponents/MakeGift'
import MoneyGoes from '@/components/donateComponents/MoneyGoes'
import RealStories from '@/components/donateComponents/RealStories'
import SupportMatters from '@/components/donateComponents/SupportMatters'
import WhyDonate from '@/components/donateComponents/WhyDonate'

function page() {
    return (
        <main>
            <PageHero title="Geofroggy Donation" subTitle="Support Stories That Unites" Bg={"/images/donate/hero.png"} />
            <SupportMatters />
            <WhyDonate />
            <MoneyGoes />
            <MakeGift />
            <RealStories />


        </main>
    )
}

export default page