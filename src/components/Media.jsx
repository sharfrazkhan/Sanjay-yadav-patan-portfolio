
import mediaData from "../mediaData.json";
const Media = () => (
  <section id="media" className="py-16 bg-gray-100">
  <div className="max-w-[1200px] mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-decoration-line: underline text-center">Media & News</h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mediaData.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
         <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] object-cover"
            />
        </div>
      ))}
    </div>
  </div>
</section>
);

export default Media;
