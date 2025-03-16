"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Coffee,
  TrendingUp,
  Award,
  HeartHandshake,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  MenuIcon,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import AnimationObserver from "./animation-observer"
import { MenuSection } from "../components/menu-section"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [countersStarted, setCountersStarted] = useState(false)
  const [counterValues, setCounterValues] = useState({
    franchises: 0,
    cities: 0,
    customers: 0,
    years: 0,
  })

  const statsRef = useRef(null)

  // Animation for counters when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true)

          const duration = 2000 // ms
          const frameDuration = 1000 / 60 // 60fps
          const totalFrames = Math.round(duration / frameDuration)

          let frame = 0
          const counter = setInterval(() => {
            frame++
            const progress = frame / totalFrames
            const easeOutQuad = 1 - (1 - progress) * (1 - progress)

            setCounterValues({
              franchises: Math.floor(easeOutQuad * 100),
              cities: Math.floor(easeOutQuad * 15),
              customers: Math.floor(easeOutQuad * 10000),
              years: Math.floor(easeOutQuad * 35),
            })

            if (frame === totalFrames) {
              clearInterval(counter)
            }
          }, frameDuration)
        }
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [countersStarted])

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 7) // Update to 7 testimonials
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Page load animation
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <AnimationObserver />

      {/* Page load animation overlay */}
      <div
        className={`fixed inset-0 bg-primary z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative w-40 h-40">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_14-3-2025_204015_-removebg-preview-YxnsXjRuqUrhXTL60DK2r5EJ7rHJZg.png"
            alt="Pushpa Amrutulya Logo"
            fill
            className="object-contain animate-pulse"
          />
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_14-3-2025_204015_-removebg-preview-YxnsXjRuqUrhXTL60DK2r5EJ7rHJZg.png"
              alt="Pushpa Amrutulya Logo"
              width={180}
              height={60}
              className={`h-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            />
          </div>
          <nav className="hidden md:flex gap-6">
            {["Home", "About Us", "Franchise", "Menu", "Contact"].map((item, index) => (
              <Link
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase().replace(/\s+/g, "")}`}
                className={`text-sm font-medium hover:text-primary transition-colors transition-transform duration-700 delay-${index * 100} ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`md:hidden transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#" className="text-base font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-base font-medium hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="#franchise" className="text-base font-medium hover:text-primary transition-colors">
                  Franchise
                </Link>
                <Link href="#menu" className="text-base font-medium hover:text-primary transition-colors">
                  Menu
                </Link>
                <Link href="#contact" className="text-base font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-primary/20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547825407-2d060104b7f8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

          {/* Animated tea steam */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 opacity-30 animate-float">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path
                d="M12 15C12 12.2386 14.2386 10 17 10C19.7614 10 22 12.2386 22 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M2 15C2 12.2386 4.23858 10 7 10C9.76142 10 12 12.2386 12 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M7 15C7 12.2386 9.23858 10 12 10C14.7614 10 17 12.2386 17 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-20 animate-float-delayed">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path
                d="M12 15C12 12.2386 14.2386 10 17 10C19.7614 10 22 12.2386 22 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M2 15C2 12.2386 4.23858 10 7 10C9.76142 10 12 12.2386 12 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M7 15C7 12.2386 9.23858 10 12 10C14.7614 10 17 12.2386 17 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="relative container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col space-y-6 text-center md:text-left">
                <div
                  className={`inline-block mx-auto md:mx-0 transition-all duration-1000 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                  }`}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_14-3-2025_204015_-removebg-preview-YxnsXjRuqUrhXTL60DK2r5EJ7rHJZg.png"
                    alt="Pushpa Amrutulya Logo"
                    width={220}
                    height={80}
                    className="h-auto"
                  />
                </div>
                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary drop-shadow-sm transition-all duration-1000 delay-300 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                  }`}
                >
                  Start Your Own Profitable Tea Franchise Today!
                </h1>
                <p
                  className={`text-lg md:text-xl text-foreground/90 max-w-[600px] mx-auto md:mx-0 transition-all duration-1000 delay-500 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                  }`}
                >
                  Join the Pushpa Amrutulya family and be part of a growing legacy of authentic tea experiences that
                  bring customers back again and again.
                </p>
                <div
                  className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-1000 delay-700 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                  }`}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white text-lg px-8 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:translate-x-full transition-transform duration-300"></span>
                    <span className="relative flex items-center">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 text-lg relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-0 bg-primary/10 group-hover:w-full transition-all duration-300"></span>
                    <span className="relative">Learn More</span>
                  </Button>
                </div>
              </div>
              <div
                className={`relative mt-8 md:mt-0 transition-all duration-1000 delay-900 ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-xl animate-pulse-slow"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1974&auto=format&fit=crop"
                    alt="Steaming cup of masala chai"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xl font-medium">The Taste That Brings You Back...!</p>
                  </div>

                  {/* Animated steam */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-20 relative">
                      <div className="steam-1 absolute w-8 h-8 bg-white rounded-full opacity-0"></div>
                      <div className="steam-2 absolute w-6 h-6 bg-white rounded-full opacity-0"></div>
                      <div className="steam-3 absolute w-4 h-4 bg-white rounded-full opacity-0"></div>
                      <div className="steam-4 absolute w-5 h-5 bg-white rounded-full opacity-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-16 bg-muted/50 relative overflow-hidden reveal-section">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose Pushpa Amrutulya?</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                We offer a unique franchise opportunity with proven success and authentic flavors that keep customers
                coming back.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Coffee className="h-6 w-6 text-primary" />,
                  title: "Authentic Taste",
                  description: "Traditional flavors, premium ingredients that create an unforgettable experience.",
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-primary" />,
                  title: "High Profit Margins",
                  description: "Low investment, high returns with a business model designed for success.",
                },
                {
                  icon: <Award className="h-6 w-6 text-primary" />,
                  title: "Brand Recognition",
                  description: "Trusted tea brand with a loyal customer base built over years of quality service.",
                },
                {
                  icon: <HeartHandshake className="h-6 w-6 text-primary" />,
                  title: "Franchise Support",
                  description: "Comprehensive training, marketing, and supply chain assistance for your success.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-500 reveal-item"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-2 bg-primary/10 rounded-full transform transition-transform duration-500 hover:scale-110 hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Franchise Benefits Section */}
        <section id="franchise" className="py-16 reveal-section">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Franchise Benefits</h2>
                <div className="space-y-4">
                  {[
                    {
                      number: "01",
                      title: "Low Investment",
                      description: "Starting from just ₹5 lakhs, our franchise model is designed to be accessible.",
                    },
                    {
                      number: "02",
                      title: "Quick ROI",
                      description: "Most franchisees report return on investment within 12-18 months.",
                    },
                    {
                      number: "03",
                      title: "Comprehensive Training",
                      description: "Full operational training and ongoing support to ensure your success.",
                    },
                    {
                      number: "04",
                      title: "Marketing Support",
                      description: "National and local marketing strategies to drive customers to your location.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.number}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-all duration-500 reveal-item"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full mt-1 transform transition-transform duration-300 hover:rotate-12">
                        <span className="text-primary font-bold">{item.number}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white relative overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:translate-x-full transition-transform duration-300"></span>
                    <span className="relative">Apply for a Franchise</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-0 bg-primary/10 group-hover:w-full transition-all duration-300"></span>
                    <span className="relative flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Brochure
                    </span>
                  </Button>
                </div>
              </div>
              <div
                className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden reveal-item"
                style={{ animationDelay: "300ms" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-md animate-pulse-slow"></div>
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1525480122447-64809d765ec4?q=80&w=1974&auto=format&fit=crop"
                    alt="Pushpa Amrutulya Tea Shop"
                    fill
                    className="object-cover transform transition-transform duration-10000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs mx-auto text-center transform transition-transform duration-500 hover:scale-105">
                      <p className="font-medium text-primary">Join 100+ successful franchisees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <MenuSection />

        {/* Testimonials Section */}
        <section className="py-16 reveal-section">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">What Our Franchisees Say</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Hear from the people who have already joined the Pushpa Amrutulya family.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[250px]">
              {[
                {
                  quote:
                    "Opening a Pushpa Amrutulya franchise was the best business decision I've made. The authentic taste and quality of products have made my store a local favorite.",
                  name: "Pramodini Madam",
                  location: "Franchise Owner, Hampi, Karnataka",
                  initials: "PM",
                },
                {
                  quote:
                    "The training and ongoing support have been exceptional. My tea shop has become profitable within just 10 months, exceeding all my expectations.",
                  name: "Sudanshu Bose",
                  location: "Franchise Owner, Kendrapara, Orissa",
                  initials: "SB",
                },
                {
                  quote:
                    "Customers love the authentic taste of Pushpa Amrutulya tea. The brand recognition has helped me establish a loyal customer base from day one.",
                  name: "Dinesh Lanjewar",
                  location: "Franchise Owner, Bhandara, Maharashtra",
                  initials: "DL",
                },
                {
                  quote:
                    "The franchise model is well-structured and easy to implement. The team's support in setting up and marketing has been invaluable.",
                  name: "Ajim Khan",
                  location: "Franchise Owner, Utarola, Uttarpradesh",
                  initials: "AK",
                },
                {
                  quote:
                    "The quality of tea and the brand value of Pushpa Amrutulya has helped me create a thriving business in my hometown.",
                  name: "Vivek Soni",
                  location: "Franchise Owner, Kareli, Madhya Pradesh",
                  initials: "VS",
                },
                {
                  quote:
                    "From day one, the guidance and support from the Pushpa Amrutulya team has been outstanding. My franchise is now a community hub.",
                  name: "Sudhir Mehta",
                  location: "Franchise Owner, Nimiya, Jharkhand",
                  initials: "SM",
                },
                {
                  quote:
                    "Being in a competitive market like Mumbai, the unique taste and brand value of Pushpa Amrutulya has given me a significant edge over competitors.",
                  name: "Prajyot Kamble",
                  location: "Franchise Owner, Mumbai, Maharashtra",
                  initials: "PK",
                },
              ].map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`absolute inset-0 transition-all duration-1000 flex justify-center ${
                    activeTestimonial === index
                      ? "opacity-100 translate-x-0 z-10"
                      : activeTestimonial === (index + 1) % 7
                        ? "opacity-0 translate-x-full z-0"
                        : "opacity-0 -translate-x-full z-0"
                  }`}
                >
                  <div className="bg-background p-8 rounded-lg shadow-md border border-muted max-w-2xl">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>
                      <p className="italic text-muted-foreground text-center text-lg">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4 pt-4 border-t justify-center">
                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold">{testimonial.initials}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "bg-primary scale-125" : "bg-primary/30"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Word Section */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 reveal-section">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative reveal-item">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-md animate-pulse-slow"></div>
                <div className="relative rounded-xl overflow-hidden border-2 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                    alt="Founder of Pushpa Amrutulya"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover transform transition-transform duration-10000 hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px] animate-float">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_14-3-2025_204015_-removebg-preview-YxnsXjRuqUrhXTL60DK2r5EJ7rHJZg.png"
                    alt="Pushpa Amrutulya Logo"
                    width={180}
                    height={60}
                    className="h-auto"
                  />
                </div>
              </div>
              <div className="space-y-6 reveal-item" style={{ animationDelay: "200ms" }}>
                <div className="inline-block bg-primary/10 px-4 py-1 rounded-full">
                  <p className="text-sm font-medium text-primary">Founder's Message</p>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">A Word From Our Founder</h2>
                <div className="relative">
                  <svg
                    className="absolute -left-4 -top-4 h-8 w-8 text-primary/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg text-muted-foreground italic animate-fade-in">
                    "When I started Pushpa Amrutulya over 35 years ago, my vision was simple - to serve authentic tea
                    that brings people together. Today, I'm proud to see how our franchise family has grown while
                    maintaining the same quality and tradition that we began with."
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-bold text-xl">Rajesh Amrutulya</h4>
                  <p className="text-muted-foreground">Founder & CEO, Pushpa Amrutulya</p>
                </div>
                <p className="text-muted-foreground">
                  With over three decades of experience in the tea industry, Rajesh has built Pushpa Amrutulya from a
                  single tea stall to one of India's most beloved tea franchise opportunities. His commitment to quality
                  and authentic flavors remains at the heart of our business.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-0 bg-primary/10 group-hover:w-full transition-all duration-300"></span>
                  <span className="relative">Read Full Story</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 reveal-section">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Photo Gallery</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Explore our tea shops, products, and happy customers through our photo gallery.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=2070&auto=format&fit=crop",
                  alt: "Steaming cup of tea",
                  category: "Products",
                },
                {
                  src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1974&auto=format&fit=crop",
                  alt: "Tea shop exterior",
                  category: "Locations",
                },
                {
                  src: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1974&auto=format&fit=crop",
                  alt: "Masala chai preparation",
                  category: "Preparation",
                },
                {
                  src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2121&auto=format&fit=crop",
                  alt: "Tea leaves",
                  category: "Ingredients",
                },
                {
                  src: "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?q=80&w=2069&auto=format&fit=crop",
                  alt: "Tea shop interior",
                  category: "Interiors",
                },
                {
                  src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
                  alt: "Tea counter",
                  category: "Service",
                },
                {
                  src: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070&auto=format&fit=crop",
                  alt: "Samosas and snacks",
                  category: "Food",
                },
                {
                  src: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1936&auto=format&fit=crop",
                  alt: "Ginger tea",
                  category: "Specials",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer reveal-item"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="self-start bg-primary/80 text-white text-xs px-2 py-1 rounded transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.category}
                    </div>
                    <div className="self-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/80 backdrop-blur-sm p-2 rounded text-xs">{item.alt}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" className="mt-8 group relative overflow-hidden">
                <span className="absolute inset-0 w-0 bg-primary/10 group-hover:w-full transition-all duration-300"></span>
                <span className="relative">View All Photos</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 bg-muted/50 reveal-section">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Video Gallery</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Watch videos about our franchise success stories, tea preparation, and more.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  thumbnail:
                    "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1974&auto=format&fit=crop",
                  title: "The Art of Making Perfect Masala Chai",
                  duration: "3:45",
                  views: "12K",
                },
                {
                  thumbnail:
                    "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?q=80&w=2069&auto=format&fit=crop",
                  title: "Franchise Success Story: Mumbai Branch",
                  duration: "5:20",
                  views: "8.5K",
                },
                {
                  thumbnail:
                    "https://images.unsplash.com/photo-1525480122447-64809d765ec4?q=80&w=1974&auto=format&fit=crop",
                  title: "Behind the Scenes: Our Tea Selection Process",
                  duration: "4:15",
                  views: "6.2K",
                },
              ].map((video, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 reveal-item"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{video.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-muted-foreground">{video.views} views</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/90 hover:bg-primary/10 p-0 group"
                      >
                        Watch Now
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button className="mt-8 bg-primary hover:bg-primary/90 text-white relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:translate-x-full transition-transform duration-300"></span>
                <span className="relative">View All Videos</span>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden reveal-section">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2013&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container relative text-center space-y-8">
            <div className="inline-block mx-auto bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full animate-bounce-slow">
              <p className="text-sm font-medium text-primary">Limited Time Offer</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Join the Pushpa Amrutulya family today and be part of a growing legacy of authentic tea experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:translate-x-full transition-transform duration-300"></span>
                <span className="relative">Apply for a Franchise</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-primary/10 group-hover:w-full transition-all duration-300"></span>
                <span className="relative">Learn More</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-primary/10 group-hover:w-full transition-all duration-300"></span>
                <span className="relative flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Brochure
                </span>
              </Button>
            </div>
            <div ref={statsRef} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center reveal-item" style={{ animationDelay: "0ms" }}>
                <p className="text-3xl font-bold text-primary">{counterValues.franchises}+</p>
                <p className="text-sm text-muted-foreground">Franchises</p>
              </div>
              <div className="text-center reveal-item" style={{ animationDelay: "200ms" }}>
                <p className="text-3xl font-bold text-primary">{counterValues.cities}+</p>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
              <div className="text-center reveal-item" style={{ animationDelay: "400ms" }}>
                <p className="text-3xl font-bold text-primary">{counterValues.customers.toLocaleString()}+</p>
                <p className="text-sm text-muted-foreground">Daily Customers</p>
              </div>
              <div className="text-center reveal-item" style={{ animationDelay: "600ms" }}>
                <p className="text-3xl font-bold text-primary">{counterValues.years}+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 reveal-section">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 reveal-item">
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions about our franchise opportunity? Reach out to us and our team will get back to you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-primary/10 rounded-full transform transition-transform duration-300 group-hover:rotate-12">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <p>+91 9766754705</p>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-primary/10 rounded-full transform transition-transform duration-300 group-hover:rotate-12">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <p>pushpaamruttulyaweb@gmail.com</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-primary/10 rounded-full transform transition-transform duration-300 group-hover:rotate-12">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <p>
                      3rd Floor 303, Rahul Complex 2, Near Main Bus Stand, Ganeshpeth, Main Bus Stand Rd, Nagpur,
                      Maharashtra 440018
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors transform transition-transform hover:scale-110"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors transform transition-transform hover:scale-110"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors transform transition-transform hover:scale-110"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4 reveal-item" style={{ animationDelay: "300ms" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      className="focus:border-primary focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className="focus:border-primary focus:ring-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="focus:border-primary focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="focus:border-primary focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                    placeholder="I'm interested in opening a franchise in..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:translate-x-full transition-transform duration-300"></span>
                  <span className="relative">Send Message</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12 reveal-section">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4 reveal-item">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_14-3-2025_204015_-removebg-preview-YxnsXjRuqUrhXTL60DK2r5EJ7rHJZg.png"
                alt="Pushpa Amrutulya Logo"
                width={160}
                height={50}
                className="h-auto"
              />
              <p className="text-sm text-muted-foreground">
                Bringing authentic tea experiences to tea lovers across India since 1985.
              </p>
            </div>
            <div className="space-y-4 reveal-item" style={{ animationDelay: "100ms" }}>
              <h3 className="font-medium">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#franchise"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Franchise
                  </Link>
                </li>
                <li>
                  <Link
                    href="#menu"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 reveal-item" style={{ animationDelay: "200ms" }}>
              <h3 className="font-medium">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground group">
                  <Phone className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform" />
                  +91 9766754705
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground group">
                  <Mail className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform" />
                  pushpaamruttulyaweb@gmail.com
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground group">
                  <MapPin className="h-4 w-4 text-primary mt-1 group-hover:rotate-12 transition-transform" />
                  3rd Floor 303, Rahul Complex 2, Near Main Bus Stand, Ganeshpeth, Nagpur, Maharashtra 440018
                </li>
              </ul>
            </div>
            <div className="space-y-4 reveal-item" style={{ animationDelay: "300ms" }}>
              <h3 className="font-medium">Subscribe</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for franchise updates and offers.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="focus:border-primary focus:ring-primary transition-all" />
                <Button className="bg-primary hover:bg-primary/90 text-white shrink-0 relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:translate-x-full transition-transform duration-300"></span>
                  <span className="relative">Subscribe</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Pushpa Amrutulya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

