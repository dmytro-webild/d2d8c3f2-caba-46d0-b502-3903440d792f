"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Sparkles, Star, Zap, Shield } from "lucide-react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLarge"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Amenities",          id: "features"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Central Jimma Hotel"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars"}}
      logoText="Central Jimma Hotel"
      description="Experience unparalleled luxury in the heart of Jimma. From elegant rooms to gourmet dining, discover your home away from home."
      buttons={[
        {
          text: "Book Your Stay",          href: "#contact"},
        {
          text: "Explore Amenities",          href: "#features"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/business-partners_1098-18010.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Welcome to Central Jimma Hotel"
      description={[
        "Central Jimma Hotel offers a blend of luxury and comfort right in the heart of the city. Whether you're here for business or leisure, our dedicated staff ensures every moment of your stay is exceptional.",        "Located just a short drive from the historic Jimma Aba Jifar Palace, we offer convenient access to city sights, dining, and recreation, all while providing a serene atmosphere to relax."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Outdoor Terrace & Pool",          description: "Relax in our large, serene outdoor pool area and spacious terrace.",          imageSrc: "http://img.b2bpic.net/free-photo/umbrella-chair-pool_1203-7228.jpg",          buttonIcon: Sparkles,
        },
        {
          title: "Gourmet Dining",          description: "Delight in delicious food at our on-site restaurant serving local and international dishes.",          imageSrc: "http://img.b2bpic.net/free-photo/couple-is-drinking-white-wine-romantic-dinner-restaurant-holding-hands_8353-10579.jpg",          buttonIcon: Star,
        },
        {
          title: "Connectivity",          description: "Stay connected with high-speed free Wi-Fi throughout our premises.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-with-walking-frame_23-2149404066.jpg",          buttonIcon: Zap,
        },
        {
          title: "Airport Shuttle",          description: "Travel with ease using our convenient and reliable airport shuttle services.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-back-car-talking-phone_1303-20470.jpg",          buttonIcon: Shield,
        },
      ]}
      title="World-Class Amenities"
      description="Enjoy an array of premium features designed to make your stay truly memorable."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Mathias S.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-walking-with-baggage_23-2149338674.jpg"},
        {
          id: "2",          name: "Kalid K.",          imageSrc: "http://img.b2bpic.net/free-photo/elderly-couple-relax-hotel-lounge_482257-102644.jpg"},
        {
          id: "3",          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/mid-shot-woman-posing-front-river_23-2148693678.jpg"},
        {
          id: "4",          name: "David M.",          imageSrc: "http://img.b2bpic.net/free-photo/young-joyful-businessman-black-suit-white-shirt-with-wireless-earphones-holding-cellphone-hand-while-happily-looking-camera-with-beautiful-building-background_574295-5827.jpg"},
        {
          id: "5",          name: "Elena R.",          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-14657.jpg"},
      ]}
      cardTitle="Guest Experiences"
      cardTag="4.1 Rating"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      text="Ready to book your luxurious stay? Contact us today for reservations and inquiries."
      buttons={[
        {
          text: "Contact Us",          href: "tel:+251471118282"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Amenities",              href: "#features"},
            {
              label: "Reviews",              href: "#testimonials"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="Central Jimma Hotel"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
