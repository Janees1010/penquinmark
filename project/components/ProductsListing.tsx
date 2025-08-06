"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ClientProductsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const clientProducts = [
    {
      id: 1,
      title: "Premium Wireless Bluetooth Headphones with Active Noise Cancellation",
      price: "89.99",
      originalPrice: "129.99",
      rating: 4.8,
      reviews: 2847,
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Best Seller",
      client: "TechGear Pro",
      prime: true,
      delivery: "FREE delivery Thu, Aug 8",
    },
    {
      id: 2,
      title: "Organic Skincare Set - Natural Face Care Kit with Vitamin C Serum",
      price: "34.99",
      originalPrice: "49.99",
      rating: 4.9,
      reviews: 1923,
      image:
        "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Amazon's Choice",
      client: "Pure Beauty Co",
      prime: true,
      delivery: "FREE delivery tomorrow",
    },
    {
      id: 4,
      title: "Ergonomic Office Chair with Adjustable Lumbar Support and Mesh Back",
      price: "249.99",
      originalPrice: "349.99",
      rating: 4.6,
      reviews: 1567,
      image:
        "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Limited time deal",
      client: "ComfortWork Solutions",
      prime: true,
      delivery: "FREE delivery Mon, Aug 12",
    },
    {
      id: 5,
      title: "Stainless Steel Water Bottle - 32oz Insulated with Leak-Proof Design",
      price: "24.99",
      originalPrice: "39.99",
      rating: 4.8,
      reviews: 4521,
      image:
        "https://images.pexels.com/photos/2748392/pexels-photo-2748392.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Climate Pledge Friendly",
      client: "HydroLife Brand",
      prime: true,
      delivery: "FREE delivery Thu, Aug 8",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-3 h-3 fill-orange-300/50 text-orange-300"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />);
    }

    return stars;
  };

  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-orange-600 text-white";
      case "Amazon's Choice":
        return "bg-slate-800 text-white";
      case "Limited time deal":
        return "bg-red-700 text-white";
      case "Climate Pledge Friendly":
        return "bg-green-700 text-white";
      default:
        return "bg-orange-600 text-white";
    }
  };

  const calculateDiscount = (original: string, current: string) => {
    const originalPrice = parseFloat(original);
    const currentPrice = parseFloat(current);
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-brand-primary mb-6">
        Clients Products
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clientProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-md hover:border-orange-500 transition duration-200 bg-white overflow-hidden shadow-sm hover:shadow-md group"
            >
              <div className="relative aspect-[4/3] bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded ${getBadgeStyles(product.badge)}`}>
                  {product.badge}
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <p className="text-xs text-gray-500 mb-1">
                  by {product.client}
                </p>
                <h3 className="text-sm font-medium text-blue-600 hover:text-red-600 hover:underline cursor-pointer leading-snug line-clamp-2 mb-2">
                  {product.title}
                </h3>

                <div className="flex items-center text-sm mb-2">
                  <div className="flex mr-1">{renderStars(product.rating)}</div>
                  <span className="text-xs text-blue-600 hover:text-red-600 hover:underline cursor-pointer">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Prime badge */}
                {product.prime && (
                  <div className="mb-2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-1 py-0.5 rounded">
                      prime
                    </span>
                  </div>
                )}

                <div className="mb-2">
                  <div className="flex items-baseline space-x-1 mb-1">
                    <span className="text-xs text-gray-600">$</span>
                    <span className="text-lg font-normal text-gray-900">
                      {product.price.split('.')[0]}
                    </span>
                    <span className="text-sm text-gray-900">
                      {product.price.split('.')[1]}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <span className="line-through">${product.originalPrice}</span>
                    <span className="ml-1">
                      ({calculateDiscount(product.originalPrice, product.price)}% off)
                    </span>
                  </div>
                </div>

                {/* Delivery */}
                <div className="text-xs text-gray-700 mb-3">
                  {product.delivery}
                </div>

                <button
                  onClick={() => router.push("/product/" + product.id)}
                  className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-medium py-1.5 rounded transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}