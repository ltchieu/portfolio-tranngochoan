import Hero from '@/component/section/Hero';
import Ticker from '@/component/section/Ticker';
import Stats from '@/component/section/Stats';
import Navbar from '@/component/layout/Navbar';
import Story from '@/component/section/Story';
import About from '@/component/section/About';
import Problem from '@/component/section/Problem';
import Solution from '@/component/section/Solution';
import Service from '@/component/section/Service';
import Performance from '@/component/section/Performance';
import CaseStudy from '@/component/section/CaseStudy';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Story />
      <About />
      <Problem />
      <Solution />
      <Service />
      <Performance />
      <CaseStudy />
    </>
  );
}
