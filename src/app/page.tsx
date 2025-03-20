import Image from "next/image";
import Sidebar from "./components/Sidebar";

export default function Home() {
  // Sample data for beehive cards
  const beehives = [
    {
      id: "3213",
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
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 lg:p-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* ... (header remains unchanged) */}
        </header>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {beehives.map((beehive) => (
              <div
                key={beehive.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden w-[350px]" // Increased width
              >
                <div className="p-4 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800"> {/* Increased text size */}
                    N° - {beehive.id}
                  </h2>
                  <Image
                    src="/images/dropdown-arrow.png"
                    alt="Dropdown Arrow"
                    width={20}  // Increased size
                    height={20}
                  />
                </div>

                <div className="relative px-4">
                  <Image
                    src={beehive.image}
                    alt={`Beehive ${beehive.id}`}
                    width={350}  // Increased width
                    height={180} // Increased height
                    className="w-full h-48 object-cover rounded-lg border-4 border-white" // Increased height
                  />
                  <div className="absolute top-3 right-6 bg-white rounded-full p-2 shadow-md">
                    <Image
                      src="/images/signal-icon.svg"
                      alt="Signal Icon"
                      width={18}  // Increased size
                      height={18}
                    />
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center text-sm text-gray-600"> {/* Increased text size */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/temperatura.png"
                        alt="Temperature Icon"
                        width={18}  // Increased size
                        height={18}
                      />
                      <span>{beehive.temperature}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/humedad.png"
                        alt="Humidity Icon"
                        width={18}
                        height={18}
                      />
                      <span>{beehive.humidity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/escala-de-peso.png"
                        alt="Weight Icon"
                        width={18}
                        height={18}
                      />
                      <span>{beehive.weight}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={beehive.imageIcon}
                        alt="Image Count Icon"
                        width={18}
                        height={18}
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
    </div>
  );
}