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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_14-3-2025_204015_-removebg-preview-YxnsXjRuqUrhXTL60DK2r5EJ7rHJZg.png"
              alt="Pushpa Amrutulya Logo"
              width={180}
              height={60}
              className="h-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#franchise" className="text-sm font-medium hover:text-primary transition-colors">
              Franchise
            </Link>
            <Link href="#menu" className="text-sm font-medium hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
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
          <div className="relative container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col space-y-6 text-center md:text-left">
                <div className="inline-block mx-auto md:mx-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_14-3-2025_204015_-removebg-preview-YxnsXjRuqUrhXTL60DK2r5EJ7rHJZg.png"
                    alt="Pushpa Amrutulya Logo"
                    width={220}
                    height={80}
                    className="h-auto"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary drop-shadow-sm">
                  Start Your Own Profitable Tea Franchise Today!
                </h1>
                <p className="text-lg md:text-xl text-foreground/90 max-w-[600px] mx-auto md:mx-0">
                  Join the Pushpa Amrutulya family and be part of a growing legacy of authentic tea experiences that
                  bring customers back again and again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 text-lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative mt-8 md:mt-0">
                <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-xl"></div>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-16 bg-muted/50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose Pushpa Amrutulya?</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                We offer a unique franchise opportunity with proven success and authentic flavors that keep customers
                coming back.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Authentic Taste</h3>
                <p className="text-muted-foreground">
                  Traditional flavors, premium ingredients that create an unforgettable experience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">High Profit Margins</h3>
                <p className="text-muted-foreground">
                  Low investment, high returns with a business model designed for success.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Brand Recognition</h3>
                <p className="text-muted-foreground">
                  Trusted tea brand with a loyal customer base built over years of quality service.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Franchise Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive training, marketing, and supply chain assistance for your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Franchise Benefits Section */}
        <section id="franchise" className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Franchise Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-all">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <span className="text-primary font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Low Investment</h3>
                      <p className="text-muted-foreground">
                        Starting from just ₹5 lakhs, our franchise model is designed to be accessible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-all">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <span className="text-primary font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Quick ROI</h3>
                      <p className="text-muted-foreground">
                        Most franchisees report return on investment within 12-18 months.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-all">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <span className="text-primary font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Comprehensive Training</h3>
                      <p className="text-muted-foreground">
                        Full operational training and ongoing support to ensure your success.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-all">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <span className="text-primary font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Marketing Support</h3>
                      <p className="text-muted-foreground">
                        National and local marketing strategies to drive customers to your location.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white">Apply for a Franchise</Button>
              </div>
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-md"></div>
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1525480122447-64809d765ec4?q=80&w=1974&auto=format&fit=crop"
                    alt="Pushpa Amrutulya Tea Shop"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs mx-auto text-center">
                      <p className="font-medium text-primary">Join 100+ successful franchisees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Showcase */}
        <section id="menu" className="py-16 bg-muted/50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Signature Menu</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Discover our range of authentic teas and snacks that keep customers coming back for more.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1974&auto=format&fit=crop"
                    alt="Masala Chai"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                      Signature
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-medium">Masala Chai</h3>
                  <p className="text-muted-foreground mt-2">
                    Our signature spiced tea blend with cardamom, ginger, and other aromatic spices.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-medium text-primary">₹25</span>
                    <span className="text-sm text-muted-foreground">Most Popular</span>
                  </div>
                </div>
              </div>
              <div className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1936&auto=format&fit=crop"
                    alt="Ginger Tea"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-medium">Ginger Tea</h3>
                  <p className="text-muted-foreground mt-2">
                    A refreshing blend with fresh ginger that warms you from the inside out.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-medium text-primary">₹30</span>
                    <span className="text-sm text-muted-foreground">Seasonal Favorite</span>
                  </div>
                </div>
              </div>
              <div className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070&auto=format&fit=crop"
                    alt="Samosas & Snacks"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-medium">Samosas & Snacks</h3>
                  <p className="text-muted-foreground mt-2">
                    Delicious savory snacks that perfectly complement our tea offerings.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-medium text-primary">₹40</span>
                    <span className="text-sm text-muted-foreground">Perfect Pairing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">What Our Franchisees Say</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Hear from the people who have already joined the Pushpa Amrutulya family.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-muted">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground text-center">
                    "Opening a Pushpa Amrutulya franchise was the best business decision I've made. The support from the
                    team and the quality of products have made my store a local favorite."
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">RM</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Rajesh Mehta</h4>
                      <p className="text-sm text-muted-foreground">Franchise Owner, Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-muted">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground text-center">
                    "The training and ongoing support have been exceptional. My tea shop has become profitable within
                    just 10 months, exceeding all my expectations."
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">SP</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Sunita Patel</h4>
                      <p className="text-sm text-muted-foreground">Franchise Owner, Pune</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-muted">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground text-center">
                    "Customers love the authentic taste of Pushpa Amrutulya tea. The brand recognition has helped me
                    establish a loyal customer base from day one."
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">AK</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Amit Kumar</h4>
                      <p className="text-sm text-muted-foreground">Franchise Owner, Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-muted/50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Tea Shops</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Take a look at some of our beautiful franchise locations across India.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?q=80&w=2069&auto=format&fit=crop"
                  alt="Tea Shop Interior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Mumbai Location</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
                  alt="Tea Shop Counter"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Delhi Franchise</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1525480122447-64809d765ec4?q=80&w=1974&auto=format&fit=crop"
                  alt="Tea Preparation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Tea Preparation</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1974&auto=format&fit=crop"
                  alt="Tea Shop Exterior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Bangalore Store</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2013&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container relative text-center space-y-8">
            <div className="inline-block mx-auto bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-sm font-medium text-primary">Limited Time Offer</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Join the Pushpa Amrutulya family today and be part of a growing legacy of authentic tea experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Apply for a Franchise
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Franchises</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Daily Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">35+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions about our franchise opportunity? Reach out to us and our team will get back to you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>+91 98765 43210</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>franchise@pushpaamrutulya.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>123 Tea Garden Road, Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="I'm interested in opening a franchise in..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
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
            <div className="space-y-4">
              <h3 className="font-medium">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#franchise"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Franchise
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  info@pushpaamrutulya.com
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  123 Tea Garden Road, Mumbai, Maharashtra, India
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Subscribe</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for franchise updates and offers.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Your email" />
                <Button className="bg-primary hover:bg-primary/90 text-white shrink-0">Subscribe</Button>
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

