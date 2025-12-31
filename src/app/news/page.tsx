
import PageHero from '@/components/common/PgaeHero'
import Ambassador from '@/components/newsComponents/Ambassador'
import Culture from '@/components/newsComponents/Culture'
import InsideGeofroggy from '@/components/newsComponents/InsideGeofroggy'
import NewsUpdate from '@/components/newsComponents/NewsUpdate'
import StoryBelongsLetter from '@/components/newsComponents/StoryBelongsLetter'

function page() {
    return (
        <main>
            <PageHero title="Behind The Frog" subTitle="Heart of Geofroggy" Bg={"/images/news/hero.png"} />
            <NewsUpdate />
            <InsideGeofroggy />
            <Culture />
            <Ambassador />
            <StoryBelongsLetter />

        </main>
    )
}

export default page