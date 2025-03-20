import Image from "next/image";
import Sidebar from "./components/Sidebar";

export default function Home() {
  // Sample data for beehive cards
  const beehives = [
    {
      id: "321",
      temperature: "20°C",
      humidity: "10%",
      weight: "20 k",
      image: "/images/colmenas.jpg",
      imageCount: "8k",
      imageIcon: "/images/camara.png",
    },
    {
      id: "6436",
      temperature: "20°C",
      humidity: "10%",
      weight: "20 k",
      image: "/images/colmenas.jpg",
      imageCount: "20k",
      imageIcon: "/images/camara.png",
    },
    {
      id: "5436",
      temperature: "20°C",
      humidity: "10%",
      weight: "20 k",
      image: "/images/colmenas.jpg",
      imageCount: "20k",
      imageIcon: "/images/camara.png",
    },
    {
      id: "6452",
      temperature: "20°C",
      humidity: "10%",
      weight: "20 k",
      image: "/images/colmenas.jpg",
      imageCount: "19k",
      imageIcon: "/images/camara.png",
    },
    {
      id: "7482",
      temperature: "20°C",
      humidity: "10%",
      weight: "20 k",
      image: "/images/colmenas.jpg",
      imageCount: "20k",
      imageIcon: "/images/camara.png",
    },
    {
      id: "8764",
      temperature: "20°C",
      humidity: "10%",
      weight: "20 k",
      image: "/images/colmenas.jpg",
      imageCount: "20k",
      imageIcon: "/images/camara.png",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Gestionar Colmena
            </h1>
            <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm sm:text-base font-medium">
              Colmena
            </button>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Buscar Colmena"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/images/search-icon.svg"
                  alt="Search Icon"
                  width={16}
                  height={16}
                />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-700 text-sm sm:text-base">
              Leonardo Palomino
            </span>
            <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm sm:text-base font-medium">
              + Agregar
            </button>
          </div>
        </header>

        {/* Beehive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {beehives.map((beehive) => (
            <div
              key={beehive.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={beehive.image}
                  alt={`Beehive ${beehive.id}`}
                  width={300}
                  height={150}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                  <Image
                    src="/images/signal-icon.svg"
                    alt="Signal Icon"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <div className="p-3">
                <h2 className="text-base font-semibold text-gray-800 mb-2">
                  N° - {beehive.id}
                </h2>
                <div className="flex justify-between items-center text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/temperatura.png"
                      alt="Temperature Icon"
                      width={14}
                      height={14}
                    />
                    <span>{beehive.temperature}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/humedad.png"
                      alt="Humidity Icon"
                      width={14}
                      height={14}
                    />
                    <span>{beehive.humidity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/escala-de-peso.png"
                      alt="Weight Icon"
                      width={14}
                      height={14}
                    />
                    <span>{beehive.weight}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={beehive.imageIcon}
                      alt="Image Count Icon"
                      width={14}
                      height={14}
                    />
                    <span>{beehive.imageCount}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}