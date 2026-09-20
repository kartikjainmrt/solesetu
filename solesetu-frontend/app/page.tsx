import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import CityCard from "@/components/CityCard/CityCard";
import ProductCard from "@/components/ProductCard/ProductCard";
import FactoryCard from "@/components/FactoryCard/FactoryCard";
import TrustSection from "@/components/TrustSection/TrustSection";
import Footer from "@/components/Footer/Footer";

const factories = [
  {
    name: "ABC Footwear Pvt. Ltd.",
    city: "Agra",
    categories: "Casual Shoes, Sneakers, Sandals",
    products: 250,
    moq: "50 pcs",
    verified: true,
    href: "/factories/abc-footwear",
  },
  {
    name: "Premium Footwear Works",
    city: "Kanpur",
    categories: "Sports Shoes, Men's Footwear",
    products: 180,
    moq: "50 pcs",
    verified: true,
    href: "/factories/premium-footwear",
  },
  {
    name: "Tiruppur Apparel Manufacturing",
    city: "Tiruppur",
    categories: "T-Shirts, Activewear, Apparel",
    products: 320,
    moq: "100 pcs",
    verified: true,
    href: "/factories/tiruppur-apparel",
  },
  {
    name: "Surat Textile Works",
    city: "Surat",
    categories: "Textiles, Apparel, Fashion",
    products: 420,
    moq: "100 pcs",
    verified: true,
    href: "/factories/surat-textile",
  },
];

const products = [
  {
    name: "Men's Casual Sneakers",
    category: "Men's Footwear",
    factory: "ABC Footwear Pvt. Ltd.",
    city: "Agra",
    moq: 50,
    price: "₹350",
    href: "/products/mens-casual-sneakers",
  },
  {
    name: "Women's Fashion Sandals",
    category: "Women's Footwear",
    factory: "Fashion Footwear Works",
    city: "Agra",
    moq: 100,
    price: "₹280",
    href: "/products/womens-fashion-sandals",
  },
  {
    name: "Sports Running Shoes",
    category: "Sports Footwear",
    factory: "Premium Sports Factory",
    city: "Kanpur",
    moq: 50,
    price: "₹450",
    href: "/products/sports-running-shoes",
  },
  {
    name: "Kids School Shoes",
    category: "Kids Footwear",
    factory: "KidsStep Manufacturers",
    city: "Agra",
    moq: 100,
    price: "₹220",
    href: "/products/kids-school-shoes",
  },
];

const categories = [
  {
    name: "Men's Footwear",
    description: "Shoes, sandals and casual footwear",
    href: "/products?category=mens-footwear",
  },
  {
    name: "Women's Footwear",
    description: "Fashion and everyday footwear",
    href: "/products?category=womens-footwear",
  },
  {
    name: "Sports Footwear",
    description: "Sports shoes and performance footwear",
    href: "/products?category=sports-footwear",
  },
  {
    name: "Kids Footwear",
    description: "Footwear for kids and children",
    href: "/products?category=kids-footwear",
  },
];

const cities = [
  {
    city: "Agra",
    category: "Footwear Manufacturing",
    href: "/cities/agra",
  },
  {
    city: "Kanpur",
    category: "Leather & Footwear",
    href: "/cities/kanpur",
  },
  {
    city: "Tiruppur",
    category: "Apparel Manufacturing",
    href: "/cities/tiruppur",
  },
  {
    city: "Ludhiana",
    category: "Apparel & Hosiery",
    href: "/cities/ludhiana",
  },
  {
    city: "Surat",
    category: "Textiles & Apparel",
    href: "/cities/surat",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Categories */}

        <section className="section">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Explore Products</p>

              <h2>Browse by Category</h2>

              <p>Find products directly from verified manufacturers.</p>
            </div>

            <a href="/categories">View all categories →</a>
          </div>

          <div className="categoryGrid">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </section>

        {/* Cities */}

        <section className="section sectionGray">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Manufacturing Hubs</p>

              <h2>Browse by City</h2>

              <p>
                Discover factories from India's major manufacturing clusters.
              </p>
            </div>

            <a href="/cities">Explore all cities →</a>
          </div>

          <div className="cityGrid">
            {cities.map((city) => (
              <CityCard key={city.city} {...city} />
            ))}
          </div>
        </section>

        {/* Featured Products */}

        <section className="section">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Featured</p>

              <h2>Popular Products</h2>
            </div>

            <a href="/products">View all products →</a>
          </div>

          <div className="productGrid">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Factories */}

        <section className="section sectionGray">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Verified Suppliers</p>

              <h2>Discover Factories</h2>
            </div>

            <a href="/factories">View factory directory →</a>
          </div>

          <div className="factoryGrid">
            {factories.map((factory) => (
              <FactoryCard key={factory.name} {...factory} />
            ))}
          </div>
        </section>

        {/* How it works */}

        <section className="section">
          <div className="sectionHeader centered">
            <p className="eyebrow">Simple Process</p>

            <h2>How SoleSetu Works</h2>

            <p>Discover, connect and source directly from manufacturers.</p>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Discover</h3>
              <p>Find products and factories by category or city.</p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Connect</h3>
              <p>Send an RFQ or contact a verified factory.</p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Order</h3>
              <p>Purchase at transparent wholesale pricing and MOQ.</p>
            </div>

            <div className="step">
              <span>04</span>
              <h3>Receive</h3>
              <p>Track your order from dispatch to delivery.</p>
            </div>
          </div>
        </section>
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
