import PageHero from '@/components/common/PgaeHero'
import ContactForm from '@/components/contactComponents/ContactForm'
import GetInvolvedSection from '@/components/getInvolved/GetInvolvedSection'
import React from 'react'

function page() {
    return (
        <main>
            <PageHero title="Contact Geofroggy" subTitle="Get In Touch with Us" Bg={"/images/heroImg.png"} gradientOverlay={true} />
            <div className='my-16'>

                <ContactForm />
            </div>

        </main>
    )
}

export default page