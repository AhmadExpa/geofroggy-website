
import PageHero from '@/components/common/PgaeHero'
import MediaAbout from '@/components/mediaComponents/MediaAbout'
import MediaGallery from '@/components/mediaComponents/MediaGallery'
import MediaNews from '@/components/mediaComponents/MediaNews'
import MediaNewsLetter from '@/components/mediaComponents/MediaNewsLetter'
import PressKit from '@/components/mediaComponents/PressKit'

function page() {
    return (
        <main>
            <PageHero title="Geofroggy Media Hub" subTitle="Assists to Amplify GeoFroggy" Bg={"/images/media/hero.png"} />
            <MediaAbout />
            <PressKit />
            <MediaNews />
            <MediaGallery />
            <MediaNewsLetter />


        </main>
    )
}

export default page