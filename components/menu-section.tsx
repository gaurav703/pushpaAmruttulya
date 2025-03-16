import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  name: string;
  nameHindi?: string;
  price: number;
  category: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
  image: string;
}

export function MenuSection() {
  const menuCategories: MenuCategory[] = [
    {
      title: "CHAI",
      image:
        "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1974&auto=format&fit=crop",
      items: [
        {
          name: "Masala Chai",
          nameHindi: "मसाला चाय",
          price: 10,
          category: "chai",
        },
        {
          name: "Gudki Chai",
          nameHindi: "गुड़की चाय",
          price: 10,
          category: "chai",
        },
        {
          name: "Adrak Chai",
          nameHindi: "अदरक चाय",
          price: 10,
          category: "chai",
        },
        {
          name: "Elaichi Chai",
          nameHindi: "इलायची चाय",
          price: 12,
          category: "chai",
        },
        {
          name: "Chocolate Chai",
          nameHindi: "चॉकलेट चाय",
          price: 15,
          category: "chai",
        },
      ],
    },
    {
      title: "KULHAD TEA",
      image:
        "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1936&auto=format&fit=crop",
      items: [
        {
          name: "Kulhad Masala Chai",
          nameHindi: "कुल्हड़ मसाला चाय",
          price: 15,
          category: "kulhad",
        },
        {
          name: "Kulhad Gud Chai",
          nameHindi: "कुल्हड़ गुड़ चाय",
          price: 15,
          category: "kulhad",
        },
        {
          name: "Kulhad Adrak Chai",
          nameHindi: "कुल्हड़ अदरक चाय",
          price: 15,
          category: "kulhad",
        },
        {
          name: "Kulhad Elaichi Chai",
          nameHindi: "कुल्हड़ इलायची चाय",
          price: 17,
          category: "kulhad",
        },
        {
          name: "Kulhad Chocolate Chai",
          nameHindi: "कुल्हड़ चॉकलेट चाय",
          price: 20,
          category: "kulhad",
        },
      ],
    },
    {
      title: "COFFEE",
      image:
        "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?q=80&w=2069&auto=format&fit=crop",
      items: [
        {
          name: "Hot Coffee",
          nameHindi: "हॉट कॉफी",
          price: 25,
          category: "coffee",
        },
        {
          name: "Cold Coffee",
          nameHindi: "कोल्ड कॉफी",
          price: 40,
          category: "coffee",
        },
        {
          name: "Oreo Coffee",
          nameHindi: "ओरिया कॉफी",
          price: 50,
          category: "coffee",
        },
        {
          name: "Ice Cream Coffee",
          nameHindi: "आइसक्रीम कॉफी",
          price: 50,
          category: "coffee",
        },
      ],
    },
    {
      title: "BLACK TEA",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2121&auto=format&fit=crop",
      items: [
        {
          name: "Black Tea",
          nameHindi: "ब्लैक चाय",
          price: 20,
          category: "black-tea",
        },
        {
          name: "Lemon Tea",
          nameHindi: "लेमन चाय",
          price: 25,
          category: "black-tea",
        },
        {
          name: "Honey Tea",
          nameHindi: "हनी चाय",
          price: 25,
          category: "black-tea",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-16 bg-muted/50 reveal-section">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Our Menu</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Discover our authentic range of teas and coffees that keep customers
            coming back for more.
          </p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="reveal-item"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {category.title}
                </h3>
                <div className="flex-1 border-t border-border"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs mx-auto text-center">
                      <p className="font-medium text-primary">
                        {category.title}
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {category.items.map((item, index) => (
                        <div
                          key={item.name}
                          className="flex justify-between items-center p-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="space-y-1">
                            <h4 className="font-medium">{item.name}</h4>
                            {item.nameHindi && (
                              <p className="text-sm text-muted-foreground">
                                {item.nameHindi}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-primary">
                              ₹{item.price}/-
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
