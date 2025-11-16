import React from 'react'
import Spline from '@splinetool/react-spline'
import {
  Menu,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ChevronDown,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Search
} from 'lucide-react'

const brand = {
  name: 'SKYWinks',
  purple: '#6366F1'
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-indigo-500" aria-hidden />
          <span className="text-xl font-extrabold tracking-tight text-gray-900">{brand.name}</span>
        </div>
        {/* Center: Menu */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-semibold">
          <a href="#" className="text-gray-800 hover:text-indigo-600 transition" aria-label="Menu">
            MENU
          </a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-2 text-sm font-bold shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          LOGIN
        </button>
        <button className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  const airplaneImg =
    'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2100&auto=format&fit=crop'

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter"
              style={{ color: brand.purple }}
            >
              {brand.name}
            </h1>
            {/* Slogans side-by-side */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-semibold uppercase tracking-wide">
              <p className="bg-white/80 text-gray-900 rounded-full px-4 py-2 w-fit mx-auto shadow-sm">
                A TEAM DEDICATED TO IMPROVING AVIATION STANDARDS
              </p>
              <p className="bg-white/80 text-gray-900 rounded-full px-4 py-2 w-fit mx-auto shadow-sm">
                WITH OUR MODERN FLEET AND WELL-TRAINED CREW
              </p>
            </div>
          </div>

          {/* Airplane front view with reflection */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <img
                src={airplaneImg}
                alt="Modern passenger airplane front view"
                className="w-[780px] max-w-full rounded-2xl shadow-2xl border border-white/30"
              />
              <img
                src={airplaneImg}
                aria-hidden
                className="w-[780px] max-w-full mt-2 opacity-30 scale-y-[-1]" 
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))',
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))'
                }}
              />
            </div>
          </div>

          {/* Social icons and scroll cue */}
          <div className="mt-10 flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/90">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
            <div className="flex-1" />
            <a href="#about" className="group inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-indigo-600 shadow-lg hover:shadow-xl transition">
              <ChevronDown className="group-hover:translate-y-0.5 transition" />
              <span className="sr-only">Scroll down</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          SKYWinks IS NOT JUST AN AIRLINE, WE ARE YOUR PARTNER ON EVERY JOURNEY
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 font-semibold">
          TAKING YOU HIGHER FURTHER AND CLOSER TO YOUR DREAMS
        </p>
      </div>
    </section>
  )
}

function Booking() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
          FIND SPECIAL PRICES TO FAVORITE DESTINATIONS
        </h3>

        {/* Search form */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase">From</label>
              <input
                type="text"
                placeholder="Jakarta"
                className="mt-2 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase">To</label>
              <input
                type="text"
                placeholder="Singapore"
                className="mt-2 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase">Date</label>
              <input
                type="date"
                className="mt-2 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase">Budget</label>
              <input
                type="number"
                placeholder="$300"
                className="mt-2 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-500 uppercase">Guest</label>
              <input
                type="number"
                placeholder="1"
                className="mt-2 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </form>
          <div className="mt-4 flex justify-end">
            <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-6 py-3 font-bold shadow-sm hover:bg-indigo-700">
              <Search size={18} /> Search
            </button>
          </div>
        </div>

        {/* Destination cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=2100&auto=format&fit=crop',
              tag: 'Economy Class - One-way',
              name: 'KUALA LUMPUR',
              route: 'JAKARTA (CGK) - KUALA LUMPUR (KUL)',
              price: '$132'
            },
            {
              img: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=2100&auto=format&fit=crop',
              tag: 'Economy Class - One-way',
              name: 'SINGAPORE',
              route: 'JAKARTA (CGK) - SINGAPORE (SIN)',
              price: '$118'
            },
            {
              img: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=2100&auto=format&fit=crop',
              tag: 'Economy Class - One-way',
              name: 'TOKYO',
              route: 'JAKARTA (CGK) - TOKYO (NRT)',
              price: '$420'
            }
          ].map((d, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-bold uppercase tracking-wide bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
                  {d.tag}
                </span>
                <h4 className="mt-4 text-xl font-extrabold text-gray-900">{d.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{d.route}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-extrabold" style={{ color: brand.purple }}>
                    {d.price}
                  </span>
                  <button className="text-indigo-600 font-bold hover:underline">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            MORE FUN AND EFFICIENT WITH SKYWinks
          </h3>
          <ul className="mt-8 space-y-4">
            {[
              'Skywinks provides great travel flexibility',
              'Comfortable facilities and services',
              'Friendly and kind flight attendants'
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 text-indigo-600" />
                <span className="text-gray-700 font-semibold">{f}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 text-white px-6 py-3 font-bold shadow-sm hover:bg-indigo-700">
            Read More
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1477255619004-6319f3e3ac77?q=80&w=2100&auto=format&fit=crop"
              alt="Top-down airplane"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function BlogPreview() {
  const posts = [
    {
      img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2100&auto=format&fit=crop',
      title: 'BEST WINTER HOLIDAY DESTINATIONS'
    },
    {
      img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2100&auto=format&fit=crop',
      title: '7 INTERESTING LOCATIONS FOR YOU TO VISIT'
    }
  ]
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm font-bold tracking-wider text-gray-500">OUR BLOG</p>
        <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">WHAT YOU DEFINITELY WANT TO KNOW</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {posts.map((p, i) => (
            <article key={i} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-extrabold text-gray-900">{p.title}</h4>
                <a href="#" className="mt-2 inline-block text-indigo-600 font-bold hover:underline">Read Article</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm font-bold tracking-wider text-gray-500">This is why passengers love Skywinks</p>
        <blockquote className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900 leading-relaxed">
          “Thank you to Skywinks for a great flight experience! Friendly service and on time flights made my trip very enjoyable. I would love to use Skywinks again in the future.”
        </blockquote>
        <p className="mt-6 font-bold text-gray-900">Kianna Curtis, <span className="text-gray-600 font-semibold">Passengers</span></p>
        {/* Slider controls */}
        <div className="mt-6 flex items-center justify-center gap-4 text-gray-700">
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50">
            <ArrowLeft size={18} />
          </button>
          <span className="text-sm font-semibold">1 / 8</span>
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2100&auto=format&fit=crop"
          alt="Plane wing over mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <h3 className="text-3xl sm:text-4xl font-extrabold">FIND SPECIAL PRICES TO FAVORITE DESTINATIONS</h3>
        <p className="mt-3 text-xl sm:text-2xl font-semibold">Special Offers 40% Off Prices</p>
        <button className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 text-white px-6 py-3 font-bold shadow-sm hover:bg-indigo-700">
          Book Now
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white" aria-hidden />
            <span className="text-xl font-extrabold text-white">{brand.name}</span>
          </div>
          <p className="text-sm text-gray-400 font-semibold">
            A TEAM DEDICATED TO IMPROVING AVIATION STANDARDS
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
            {['PRIVACY POLICY', 'TERM & CONDITION', 'ABOUT US', 'FAQ'].map((l) => (
              <a key={l} href="#" className="hover:text-white">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-4 justify-start md:justify-end">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <Youtube size={18} />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-gray-500">
          © 2023 SKYWinks Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Booking />
      <Features />
      <BlogPreview />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}
