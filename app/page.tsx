import Faq from '@/components/landing/Faq';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Blog from '@/components/landing/Blog';
import MoreAboutUs from '@/components/landing/MoreAboutUs';
import KeyDifference from '@/components/landing/KeyDifference';
import UseCase from '@/components/landing/UseCase';
import ContactUs from '@/components/landing/ContactUs';
import Footer from '@/components/landing/Footer';

import "./colors.css";

export default function Home() {
  return <>
    <Header />

    <Hero />

    <Blog />

    <MoreAboutUs />

    <KeyDifference />

    <UseCase />

    <ContactUs />

    <Faq />

    <Footer />
  </>
}