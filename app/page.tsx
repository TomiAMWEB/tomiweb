import NavHeader from "@/components/NavHeader"
import HeroSection from "@/components/HeroSection"
import BioSection from "@/components/BioSection"
import ClubsSection from "@/components/ClubsSection"
import EventsSection from "@/components/EventsSection"
import MusicSection from "@/components/MusicSection"
import ContactSection from "@/components/ContactSection"

export default function Page() {
  return (
    <>
      <NavHeader />
      <main>
        <HeroSection />
        <BioSection />
        <ClubsSection />
        <EventsSection />
        <MusicSection />
        <ContactSection />
      </main>
    </>
  )
}
