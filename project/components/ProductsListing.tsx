'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ClientProductsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter()
  // Sample client products data
  const clientProducts = [
    {
      id: 1,
      title: "Premium Wireless Bluetooth Headphones",
      price: "$89.99",
      originalPrice: "$129.99",
      rating: 4.8,
      reviews: 2847,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Best Seller",
      client: "TechGear Pro"
    },
    {
      id: 2,
      title: "Organic Skincare Set - Natural Face Care Kit",
      price: "$34.99",
      originalPrice: "$49.99",
      rating: 4.9,
      reviews: 1923,
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Amazon's Choice",
      client: "Pure Beauty Co"
    },
    {
      id: 3,
      title: "Smart Home Security Camera System",
      price: "$149.99",
      originalPrice: "$199.99",
      rating: 4.7,
      reviews: 3456,
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Top Rated",
      client: "SecureHome Tech"
    },
    {
      id: 4,
      title: "Ergonomic Office Chair - Lumbar Support",
      price: "$249.99",
      originalPrice: "$349.99",
      rating: 4.6,
      reviews: 1567,
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Hot Deal",
      client: "ComfortWork Solutions"
    },
    {
      id: 5,
      title: "Stainless Steel Water Bottle - 32oz",
      price: "$24.99",
      originalPrice: "$39.99",
      rating: 4.8,
      reviews: 4521,
      image: "https://images.pexels.com/photos/2748392/pexels-photo-2748392.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Eco-Friendly",
      client: "HydroLife Brand"
    },
    {
      id: 6,
      title: "Yoga Mat - Non-Slip Exercise Mat",
      price: "$29.99",
      originalPrice: "$44.99",
      rating: 4.7,
      reviews: 2134,
      image: "https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Fitness Essential",
      client: "ZenFit Wellness"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured products
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(clientProducts.length, 3));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating:number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0; 

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  const featuredProducts = clientProducts.slice(0, 3);
  const gridProducts = clientProducts.slice(3);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12"
    >
      {/* Header */}
      <div className={`text-center mb-8 sm:mb-12 px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
          Our Clients' Success
          <span className="block text-orange-500">on Amazon</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Discover the products we've helped launch to Amazon success. From best-sellers to top-rated items, 
          see how we transform brands into marketplace leaders.
        </p>
      </div>

      {/* Featured Products Carousel */}
      <div className={`max-w-7xl mx-auto px-3 sm:px-4 mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Featured Success Stories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                index === currentIndex ? 'ring-2 sm:ring-4 ring-orange-400 ring-opacity-50' : ''
              }`}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                  <Eye className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">by {product.client}</div>
                <h3 className="font-bold text-base sm:text-lg mb-3 text-gray-800 leading-tight line-clamp-2">{product.title}</h3>
                
                <div className="flex items-center mb-3 flex-wrap">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    {product.rating} ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-base sm:text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                    Save {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>View Success Story</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className={`max-w-7xl mx-auto px-3 sm:px-4 transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">More Client Successes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {gridProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-3 sm:p-4">
                <div className="text-xs text-gray-500 mb-1">by {product.client}</div>
                <h3 className="font-semibold text-sm sm:text-base mb-2 text-gray-800 leading-tight line-clamp-2">{product.title}</h3>
                
                <div className="flex items-center mb-2 flex-wrap">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs text-gray-600">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>
                
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <div className="flex items-center space-x-1">
                    <span className="text-base sm:text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className={`text-center px-3 sm:px-4 transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-white">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Join These Success Stories?</h3>
          <p className="text-sm sm:text-base lg:text-lg mb-6 opacity-90 leading-relaxed">
            Let us help you achieve the same level of success on Amazon. From product optimization to sales growth, 
            we have the expertise to transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center">
            {/* <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Success Story
            </Button>
             */}
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300"
              onClick={() => router.push('/services')}
            >
              See Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}