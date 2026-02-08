import { Button } from "@/components/ui/button";
import { ChevronRight, Users, MapPin, Accessibility } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Minimalist Luxury with Organic Elements
 * - Warm beige background with deep green accents
 * - Serif display font (Playfair Display) for elegance
 * - Asymmetric layouts with generous whitespace
 * - Image-first storytelling with subtle shadows
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:inline">
              ARMONIA
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About us
            </a>
            <a href="#tours" className="hover:text-primary transition-colors">
              Tours
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contacts
            </a>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Book a Tour
            </Button>
          </div>
          <div className="md:hidden">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Book a Tour
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pb-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              ARMONIA
              <br />
              EXCURSIONS
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              The most popular and trusted travel agency in Greece
            </p>
            <a
              href="#tours"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              EXPLORE DESTINATIONS
              <ChevronRight size={20} />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 md:h-full min-h-96">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/42fYNwmbi3WVJgdSsyTURp/sandbox/OLilBBMUzcFWbkI5bWZqtw-img-1_1770528175000_na1fn_aGVyby1ncmVlY2UtdGVtcGxl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNDJmWU53bWJpM1dWSmdkU3N5VFVScC9zYW5kYm94L09MaWxCQk1VemNGV2JrSTViV1pxdHctaW1nLTFfMTc3MDUyODE3NTAwMF9uYTFmbl9hR1Z5YnkxbmNtVmxZMlV0ZEdWdGNHeGwuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UC9UnOMo7qj4z-PJf0PHf-EWdw1u3xkGJu9FL8YBAwUsLuCe427QmRhiE9MY85uQau-pdkQhYqXh7NBeI1KHj051Zx~7myNc8VsGTUyA2X0mDGBEsR61TK1mKi969PSjWbZyH~hW5twc5fRdrQsWSFjxXe-DRhF7fcGCx3CUgjkO1lQFhUXvnEPtPNbpag471pMAZCTBRhMXtBEns7WOsvDCPP2sxoEWSar9x6iPULc0cbXrgRo4hdEBxu8DbNixJD-fnTThFnu2~qmQd6Q-5j2TjsKnXFz1yvvuDq~d6vEF16oYPr0JvRzFwRgfUpq8860ixyi6u18SQ4pyNi~Aqw__"
              alt="Greek Temple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left Image */}
            <div className="md:col-span-1 rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/42fYNwmbi3WVJgdSsyTURp/sandbox/OLilBBMUzcFWbkI5bWZqtw-img-2_1770528182000_na1fn_aXZ5LWNvdmVyZWQtcnVpbnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNDJmWU53bWJpM1dWSmdkU3N5VFVScC9zYW5kYm94L09MaWxCQk1VemNGV2JrSTViV1pxdHctaW1nLTJfMTc3MDUyODE4MjAwMF9uYTFmbl9hWFo1TFdOdmRtVnlaV1F0Y25WcGJuTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fdw95AFNTxX1wepfn7L79-w105UU9HtT2QEoKWAuU79MkLgNInmJn4MvEsQM3NsxjdtCUa7HKzBN8S-FXVm-WPp~FiqFW~A5aKtLzaRQR6G0YPiPx1bzAlhjQIjb~~UJHS3Rm7TARAXdnkTltPPEzOvS~GSjFz7fZUlj2x-QW1Plho08bkh4JMp5-h0qxUMbtHXztDVbY3oINTbPU3iJviZ56hCse7qeF8CwW8AJ~S9ONqqmXdHkiGXWgSGFUJ87U~CvMAbCsbDyvbchOSv2vdUTCzFZ15YsWWXlXCdnFC3ToqJepZN5lJfHrtp~c68y3Mqzy0D837kJW61jnJrOEg__"
                alt="Ivy Covered Ruins"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="md:col-span-1 flex flex-col justify-center">
              <div className="text-sm text-primary font-semibold mb-2">
                ABOUT US
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                The Highest Level of Comfort, Convenience and Service
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                At Armonia Excursions, we combine premium service with attention to detail. Whether it's a private group experience, or a seamless transfer – we take care of everything so you can enjoy every moment.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:gap-3 transition-all w-fit"
              >
                MORE ABOUT US
                <ChevronRight size={20} />
              </a>
            </div>

            {/* Right Image */}
            <div className="md:col-span-1 rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/42fYNwmbi3WVJgdSsyTURp/sandbox/OLilBBMUzcFWbkI5bWZqtw-img-4_1770528178000_na1fn_bHV4dXJ5LWNvbHVtbnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNDJmWU53bWJpM1dWSmdkU3N5VFVScC9zYW5kYm94L09MaWxCQk1VemNGV2JrSTViV1pxdHctaW1nLTRfMTc3MDUyODE3ODAwMF9uYTFmbl9iSFY0ZFhKNUxXTnZiSFZ0Ym5NLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BinZ9l1Ngnb96WCz6N6qC5UU3kVqSOp7V55Z3lKWB~DSG2oXXuBCuYEpFHIcl~inewVbpclPnYdrOKzR7pfAbPvQBDvIuZlsLY-bR8vAFwjzlYudvV4qrg9WLowmY8wOUVbJrww8z9Zy760zUiil6zHisPUqiPnOmB4EtKzcv7RElgPI2QGEMIp80PN5-lZjd3Rbkv6yOOwcnGG~hYWV8nKFuawIM4wTOL4xeiOUa7vTLtoHXo5Xb5ehY76Vm15ZWH3f56vhp3s8gNJNJQqiihQaXCLyxGEioJVxvSg44Z9tcExOFsvxg4RgpWsquzTLYTSVWSmyJuvd5TIGF2N1VQ__"
                alt="Luxury Columns"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Professional Team */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Professional team
              </h3>
              <p className="text-muted-foreground">
                With years of experience in tourism, making sure you enjoy every moment
              </p>
            </div>

            {/* Flexibility */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Flexibility
              </h3>
              <p className="text-muted-foreground">
                From flexible schedules to airports and ports – we take you where you need to go
              </p>
            </div>

            {/* Accessibility */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Accessibility className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Accessibility
              </h3>
              <p className="text-muted-foreground">
                Ensuring everyone can enjoy our services with comfort and ease
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            What we offer?
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            From a private tour and a scheduled route to an accessible travel experience – we've got the perfect solution for you.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Services */}
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4 px-6 border-primary/20 hover:bg-primary/5"
              >
                <span className="text-lg font-semibold text-foreground">
                  Private Tours
                </span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4 px-6 border-primary/20 hover:bg-primary/5"
              >
                <span className="text-lg font-semibold text-foreground">
                  Scheduled Tours
                </span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4 px-6 border-primary/20 hover:bg-primary/5"
              >
                <span className="text-lg font-semibold text-foreground">
                  Transfers
                </span>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4 px-6 border-primary/20 hover:bg-primary/5"
              >
                <span className="text-lg font-semibold text-foreground">
                  Wheelchair Accessibility
                </span>
              </Button>
            </div>

            {/* Right Content */}
            <div className="flex flex-col">
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 mb-8">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/42fYNwmbi3WVJgdSsyTURp/sandbox/OLilBBMUzcFWbkI5bWZqtw-img-3_1770528177000_na1fn_Y29hc3RhbC1tZXJjZWRlcy10b3Vy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNDJmWU53bWJpM1dWSmdkU3N5VFVScC9zYW5kYm94L09MaWxCQk1VemNGV2JrSTViV1pxdHctaW1nLTNfMTc3MDUyODE3NzAwMF9uYTFmbl9ZMjloYzNSaGJDMXRaWEpqWldSbGN5MTBiM1Z5LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D~yTZIhb32YODxdrmKR9gD25gUIHx-QihrebIE0JS4Q4fvKG6UCSuQ-zsks5ztztd6qcqXorwSrnEwmlQtlM4qbL~8ihs6~EfAxyFEuvjmEweb~msC50Xt-g3KyAAgKC6ZuaIXIJbSxVZWangh1zXLk7FtIDXWnEtsQxFIeShd30LoOo4H5ApH6pkUad8NFr7tF2vmWGiuMrvNguL4ooSjyEhbUy0T9IDrNTNY15diQru8OyvP6HpIOmKBhfK58VnuazfXCTrdBjL6VzSd3QfLOd2hwwNM8OXvahzCU~VT8X-LdcmELBLfnF~Q39w78ZoFAMarfqmlx7WMmJrMryIQ__"
                  alt="Mercedes Vito Tour"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm text-primary font-semibold mb-2">
                  ON YOU WISH
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  Tailored <em>Private Tours</em>
                  <br />
                  in Mercedes Vito
                </h3>
                <p className="text-muted-foreground mb-6">
                  Experience Greece in style with our Mercedes Vito – a 7-seater (3 days + driver). These luxe vehicles provide the perfect blend of comfort and flexibility – not as many of us for hire.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  EXPLORE TOURS
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-75">
            © 2024 Armonia Excursions. All rights reserved.
          </p>
          <p className="text-xs opacity-50 mt-4">
            / ui.poly.volt
          </p>
        </div>
      </footer>
    </div>
  );
}
