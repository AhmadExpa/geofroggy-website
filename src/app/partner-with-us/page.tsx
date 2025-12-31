
import PartnerHero from "@/components/partnerComponents/PartnerHero";
import SponsorshipOpportunities from "@/components/partnerComponents/Sponsorship";
import WhySponsor from "@/components/partnerComponents/WhySponsor";
import ValueBrand from "@/components/partnerComponents/ValueBrand";
import WhatsAhead from "@/components/partnerComponents/WhatsAhed";
import ShareYourWorld from "@/components/homeComponents/ShareYourWorld";

const Page = () => {
    return (
        <main>
            <PartnerHero />
            <WhySponsor />
            <ValueBrand />
            <SponsorshipOpportunities />
            <WhatsAhead />
            <ShareYourWorld />
        </main>
    );
};

export default Page;
