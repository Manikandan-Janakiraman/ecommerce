import { Flower, BookOpen, Sparkles, Flame, Gift } from "lucide-react";

const categories = [
  {
    name: "Pooja Items",
    icon: <Flower size={40} />,
  },
  {
    name: "Idols",
    icon: <Sparkles size={40} />,
  },
  {
    name: "Spiritual Books",
    icon: <BookOpen size={40} />,
  },
  {
    name: "Agarbatti",
    icon: <Flame size={40} />,
  },
  {
    name: "Pooja Kits",
    icon: <Gift size={40} />,
  },
];

const Categories = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      
      
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
      
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-10">
          Shop by Category
        </h2>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="text-red-500 mb-3">
                {cat.icon}
              </div>
              <p className="text-sm md:text-base font-medium text-gray-700 text-center">
                {cat.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Categories;