import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa"; // Import YouTube icon

const eventDetails = {
  event1: {
    src: "/bikers.jpg",
    title: "Keran Valley – A Journey to Nature’s Paradise",
    description:
      "Keran Valley, located in Kupwara district, Jammu and Kashmir, is a hidden gem along the Neelum River. Surrounded by lush meadows, dense forests, and snow-capped peaks, the valley offers breathtaking views of Pakistan’s Neelum Valley just across the river.The trip was a serene escape, with moments like standing at the Indian Keran viewpoint and seeing the peaceful villages of Neelum Valley on the other side. It was a unique experience, reflecting on how nature connects people despite borders.The friendly locals, traditional wooden houses, and authentic Kashmiri food made this journey even more special. As the sun set, the golden reflections on the river created a mesmerizing scene, making it a memory to cherish forever.To relive this beautiful journey, we’ve shared our experience in a vlog. You can watch the full video on YouTube, where we take you through the stunning landscapes and the tranquility of the valley.If you’re looking for untouched beauty, peaceful landscapes, and a unique travel experience, Keran Valley should definitely be on your list! 🌿🏞️",
    youtube: "https://youtu.be/0mZiyN9wbzs?si=Tebrp2pYMVqbVlDs", // YouTube link
  },
  event2: {
    src: "/fun-pic.jpg",
    title: "Capturing the Scenic Beauty of Neelum Valley",
    description:
      "Neelum Valley, often called The Blue Gem of Pakistan, is a photographer's paradise. With lush meadows, snow-capped peaks, and crystal-clear rivers, every corner offers stunning views. One of my favorite moments was taking pictures right at the edge of the Neelum River, capturing the serene landscape as the water flowed gently by.The valley’s sunrise and sunset views were perfect for framing, with the changing light casting magical hues on the mountains. Whether it was the tranquil lakes or the picturesque villages, every scene in Neelum Valley felt like it was made to be captured. If you’re planning a trip, Mirrentx offers great rental services like camping gear and cameras to help make your adventure even more memorable!",
  },
  event3: {
    src: "/lolab-valley.jpg",
    title: "Exploring the Beauty of Green Lolab Valley",
    description:
      "Green Lolab Valley, located in Kupwara district, is an untouched paradise that feels like a secret garden. With lush green meadows, vibrant wildflowers, and tranquil streams, the valley offers a peaceful escape into nature’s embrace.Taking pictures by the crystal-clear Lolab River, surrounded by rolling hills and dense forests, provides some of the most serene and breathtaking views. The entire landscape exudes a sense of calm, making it the perfect place to connect with nature.For those planning a trip to this stunning destination, Mirrentx provides excellent rental services like camping gear and cameras to capture every unforgettable moment of your adventure!",
  },
  event4: {
    src: "/lighting-decor.jpg",
    title: "A Memorable Wedding Celebration with Mirrentx Rentals",
    description:
      "We had the privilege of being part of a beautiful wedding event where everything was perfectly arranged, thanks to the high-quality rental services provided by Mirrentx. From stunning lighting setups that illuminated the venue to elegant decorations that created a magical atmosphere, every detail was designed to make the day unforgettable.The wedding also featured a generator to ensure the event went smoothly, even in case of power interruptions. The camera shoots and videography services captured every special moment, creating lasting memories for the couple and guests alike.With Mirrentx, the entire wedding experience was seamless and stress-free, allowing the family to enjoy every moment while we took care of all the event's technical needs.For your own big day, Mirrentx provides everything you need—from lighting and decorations to camera equipment and videography services—to make your wedding truly unforgettable.🚀 Contact Mirrentx for your next event!",
  },
  event5: {
    src: "/azad-kashmir.jpg",
    title: "Stunning Snapshots of Pakistan’s Beauty on the Road to Keran",
    description:
      "During our unforgettable journey toward Keran Valley, we captured some truly beautiful pictures of Pakistan’s mesmerizing landscapes. As we traveled through the winding roads, the view of lush green meadows, majestic mountains, and flowing rivers along the way was simply breathtaking.The vibrant scenery, with the distant peaks and tranquil rivers, offered endless opportunities for stunning photos. Each stop along the way revealed a new angle of Pakistan’s beauty, and we made sure to capture every moment—whether it was the early morning mist over the valleys or the golden hues at sunset.For anyone planning a trip to these picturesque destinations, Mirrentx provides top-notch camera rentals to help you document these unforgettable views!🚀 Contact Mirrentx for your travel and camera rental needs!",
  },
  event6: {
    src: "/bungus-2.webp",
    title: "Exploring the Beauty of Bangus Valley.",
    description:
      "Located in the Kupwara district of Jammu and Kashmir, Bangus Valley is a hidden gem, known for its breathtaking landscapes. Our journey to this serene valley with the Mirrentx team was filled with unforgettable moments, perfect for photography.The lush green meadows, snow-capped mountains, and tranquil streams offered endless opportunities for stunning shots. The soft morning light and golden hour brought the valley to life, making it a photographer's paradise.For anyone planning to visit Bangus Valley, Mirrentx offers camera rentals and all the gear needed to capture the beauty of this untouched landscape.🚀 Contact Mirrentx for your camera and travel gear rentals and start your adventure today!",
  },
};

export default function EventPage({ params }) {
  const event = eventDetails[params.id];

  if (!event) {
    return (
      <p className="text-center text-2xl text-gray-600 mt-10">
        Event Not Found
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto min-h-screen px-4 pt-20 bg-gray-100 mb-2">
      {/* 8K HD Image */}
      <div className="w-full max-h-[52vh] overflow-hidden rounded-lg shadow-2xl">
        <Image
          src={event.src}
          alt={event.title}
          width={7680}
          height={4320}
          quality={100}
          className="w-full h-auto object-cover rounded-t-lg filter brightness-110 contrast-125 saturate-150"
          priority
        />
      </div>

      {/* Event Title */}
      <h1 className="text-4xl font-bold text-gray-800 mt-6">{event.title}</h1>

      {/* Event Description (Bold First Letter) */}
      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
        {event.description}
      </p>

      {/* YouTube Video Link (Only for event1 - Music Festival) */}
      {params.id === "event1" && event.youtube && (
        <div className="mt-4">
          <Link
            href={event.youtube}
            target="_blank"
            className="flex items-center gap-2 text-red-600 text-lg font-semibold hover:text-red-800 transition"
          >
            <FaYoutube size={24} />
            Watch on YouTube
          </Link>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-6">
        <Link href="/Gallery">
          <button className="bg-gray-700 mb-10 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition">
            ← Back to Gallery
          </button>
        </Link>
      </div>
    </div>
  );
}
