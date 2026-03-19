import { Hero } from '../sections/Hero';
import { OurStory } from '../sections/OurStory';
import { Benefits } from '../sections/Benefits';
import { Services } from '../sections/Services';
import { Products } from '../sections/Products';
import { Process } from '../sections/Process';
import { Training } from '../sections/Training';
import { Partnerships } from '../sections/Partnerships';
import { Proof } from '../sections/Proof';
import { Testimonials } from '../sections/Testimonials';
import { CTA } from '../sections/CTA';

function HomePage() {
  return (
    <>
      <Hero />
      <section id="about">
        <OurStory />
      </section>
      <Benefits />
      <section id="services">
        <Services />
      </section>
      <section id="products">
        <Products />
      </section>
      <Process />
      <section id="training">
        <Training />
      </section>
      <section id="partners">
        <Partnerships />
      </section>
      <Proof />
      <Testimonials />
      <section id="contact">
        <CTA />
      </section>
    </>
  );
}

export default HomePage;
