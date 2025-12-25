
import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

/** 
 * DATA & TYPES
 */
interface Game {
  id: string;
  title: string;
  url: string;
  category: string;
  thumbnailText: string;
  description: string;
}

const GAMES: Game[] = [
  {
    id: 'moto-x3m',
    title: 'Moto X3M 1',
    url: 'https://unblocked-games.s3.amazonaws.com/moto-x3m.html',
    category: 'Racing',
    thumbnailText: 'MOTO X3M',
    description: 'The ultimate bike racing game with challenging levels and insane stunts.'
  },
  {
    id: 'moto-x3m-winter',
    title: 'Moto X3M Winter',
    url: 'https://unblocked-games.s3.amazonaws.com/moto-x3m-winter.html',
    category: 'Racing',
    thumbnailText: 'WINTER',
    description: 'Race through icy tracks and snowy mountains in this winter edition.'
  },
  {
    id: 'moto-x3m-pool-party',
    title: 'Moto X3M Pool Party',
    url: 'https://unblocked-games.s3.amazonaws.com/moto-x3m-pool-party.html',
    category: 'Racing',
    thumbnailText: 'POOL PARTY',
    description: 'Sun, sand, and stunts! Conquer the summer-themed obstacles.'
  },
  {
    id: 'moto-x3m-spooky-land',
    title: 'Moto X3M Spooky Land',
    url: 'https://unblocked-games.s3.amazonaws.com/moto-x3m-spooky-land.html',
    category: 'Racing',
    thumbnailText: 'SPOOKY',
    description: 'Eerie levels and ghost-filled tracks await in Spooky Land.'
  }
];

/**
 * COMPONENTS
 */

const AdBanner: React.FC = () => (
  <div className="w-full bg-gray-800 border-y border-gray-700 p-4 text-center my-4">
    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">
      ADVERTISING SPACE (SAFE MODE ACTIVE)
    </span>
  </div>
);

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In this simple version, we just go home
    navigate('/');
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-orange-600 text-white px-3 py-1 font-black italic text-xl rounded transform -skew-x-12">
            MOTO X3M
          </span>
          <span className="text-gray-300 font-bold hidden sm:inline">2025 SCHOOL</span>
        </Link>
        
        <form onSubmit={handleSearch} className="flex-1 max-w-md flex">
          <input 
            type="text" 
            placeholder="Find games..."
            className="w-full bg-gray-800 border border-gray-700 rounded-l px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button 
            type="submit"
            className="bg-gray-700 px-4 py-2 rounded-r hover:bg-gray-600 font-bold text-xs uppercase"
          >
            SEARCH
          </button>
        </form>

        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-400 hover:text-white font-bold text-xs uppercase tracking-tighter">
            ALL GAMES
          </Link>
          <div className="h-4 w-px bg-gray-700"></div>
          <span className="text-orange-500 font-bold text-xs cursor-default">
            UNBLOCKED
          </span>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-gray-900 border-t border-gray-800 py-10 mt-12">
    <div className="container mx-auto px-4 text-center">
      <div className="mb-6 flex justify-center space-x-6 text-xs font-bold text-gray-500 uppercase">
        <Link to="/" className="hover:text-gray-300">HOME</Link>
        <Link to="/" className="hover:text-gray-300">PRIVACY</Link>
        <Link to="/" className="hover:text-gray-300">TERMS</Link>
        <Link to="/" className="hover:text-gray-300">CONTACT</Link>
      </div>
      <p className="text-gray-600 text-sm">
        Moto X3M Unblocked 2025 School Edition. Designed for maximum fun and performance.
      </p>
      <p className="text-gray-700 text-xs mt-4">
        &copy; 2025 MotoX3M-Unblocked-Fansite. Not affiliated with game creators.
      </p>
    </div>
  </footer>
);

const GameCard: React.FC<{ game: Game }> = ({ game }) => (
  <Link 
    to={`/game/${game.id}`}
    className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300 flex flex-col"
  >
    <div className="relative aspect-video bg-gray-800 flex items-center justify-center overflow-hidden">
      <span className="text-3xl font-black italic text-gray-700 group-hover:text-orange-600 transition-colors uppercase select-none">
        {game.thumbnailText}
      </span>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 bg-orange-600 text-white px-4 py-2 rounded-full font-black text-sm uppercase tracking-widest transform scale-90 group-hover:scale-100 transition-all">
          PLAY NOW
        </span>
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-lg text-white group-hover:text-orange-500 transition-colors">{game.title}</h3>
        <span className="bg-gray-800 text-gray-400 text-[10px] font-black px-2 py-0.5 rounded uppercase">{game.category}</span>
      </div>
      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
        {game.description}
      </p>
    </div>
  </Link>
);

const Home: React.FC = () => (
  <main className="container mx-auto px-4 py-8">
    <section className="mb-12">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black italic mb-4 uppercase leading-tight">
            Moto X3M Unblocked 2025
          </h1>
          <p className="text-lg opacity-90 mb-6 font-medium">
            Experience the world's most popular bike racing game right here. No blocks, no lags, just pure adrenaline. 
            Perfectly optimized for School Chromebooks and Desktops.
          </p>
          <Link 
            to="/game/moto-x3m"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg uppercase hover:bg-orange-50 transition-colors shadow-xl"
          >
            START RACING
          </Link>
        </div>
        <div className="absolute right-[-10%] bottom-[-20%] text-[200px] font-black italic text-white/10 select-none pointer-events-none uppercase">
          MOTO
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <h2 className="text-2xl font-black uppercase italic tracking-tighter">Trending Games</h2>
        <div className="text-xs font-bold text-orange-500 uppercase flex space-x-2">
          <span>Sort by:</span>
          <button className="underline decoration-2 underline-offset-4">Hot</button>
          <button className="opacity-50">New</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>

    <AdBanner />

    <section className="mt-12 text-gray-400 prose prose-invert max-w-none">
      <h2 className="text-2xl font-bold text-white mb-4">How to Play Moto X3M Unblocked</h2>
      <p>Moto X3M is a fantastic bike racing game with 22 challenging levels. Each level features a series of obstacles and stunts that you must navigate. The faster you complete the level, the more stars you earn.</p>
      
      <h3 className="text-lg font-bold text-white mt-6 mb-2">Controls:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Arrow Up / W:</strong> Accelerate</li>
        <li><strong>Arrow Down / S:</strong> Brake</li>
        <li><strong>Arrow Left / A:</strong> Tilt Back / Balance</li>
        <li><strong>Arrow Right / D:</strong> Tilt Forward / Balance</li>
        <li><strong>R:</strong> Restart level</li>
      </ul>
      
      <h3 className="text-lg font-bold text-white mt-6 mb-2">Pro Tips for School Players:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Perform flips in the air to reduce your race time. Each flip takes 0.5 seconds off the clock.</li>
        <li>Landing on your rear wheel first is often safer on steep hills.</li>
        <li>Don't hold the accelerate button constantly; sometimes you need to coast to maintain control.</li>
        <li>If you get stuck, use the 'R' key to instantly restart the checkpoint.</li>
      </ul>
    </section>
  </main>
);

const GamePlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const game = GAMES.find(g => g.id === id);

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-black text-red-600 mb-4">GAME NOT FOUND</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-orange-600 text-white px-6 py-3 rounded font-bold"
        >
          BACK TO HOME
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-black py-2 px-4 flex justify-between items-center text-xs font-bold border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-orange-500 hover:text-orange-400">HOME</Link>
          <span className="text-gray-700">/</span>
          <span className="text-white uppercase">{game.title}</span>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-gray-300"
          >
            RELOAD
          </button>
          <button 
            onClick={() => {
              const el = document.querySelector('iframe');
              if (el?.requestFullscreen) el.requestFullscreen();
            }}
            className="bg-orange-600 hover:bg-orange-500 text-white px-3 py-1 rounded"
          >
            FULLSCREEN
          </button>
        </div>
      </div>

      <div className="flex-1 bg-black flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto p-4 flex-1 flex flex-col">
          <div className="relative flex-1 bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl min-h-[500px]">
            <iframe 
              src={game.url} 
              allowFullScreen
              title={game.title}
              scrolling="no"
              loading="lazy"
              className="w-full h-full border-none absolute inset-0"
            ></iframe>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h1 className="text-3xl font-black italic text-white uppercase mb-2">{game.title}</h1>
              <div className="flex gap-2 mb-4">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Official Source
                </span>
                <span className="bg-green-900/30 px-3 py-1 rounded-full text-[10px] font-bold text-green-500 uppercase tracking-widest">
                  Safe & Secure
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {game.description}
              </p>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-white mb-4 uppercase text-sm">Game Controls</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-500 text-xs font-bold uppercase">UP / W</span>
                    <span className="text-white text-xs font-bold">ACCELERATE</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-500 text-xs font-bold uppercase">DOWN / S</span>
                    <span className="text-white text-xs font-bold">BRAKE</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-500 text-xs font-bold uppercase">LEFT / A</span>
                    <span className="text-white text-xs font-bold">LEAN BACK</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-500 text-xs font-bold uppercase">RIGHT / D</span>
                    <span className="text-white text-xs font-bold">LEAN FRONT</span>
                  </div>
                </div>
              </div>

              {/* Task 1: Strategy Guide Section */}
              <div className="strategy mt-8 text-gray-300 p-4 bg-gray-800 rounded-lg">
                Put on your helmet and rev the engine! Moto X3M Unblocked 2025 is the craziest motorbike stunt game on the web. You must navigate tracks filled with explosives, spikes, moving saws, and giant loops. Based on physics, controlling your bike's center of gravity is crucial. Performing front flips or backflips isn't just for style—it reduces your time, helping you get 3 stars.
                <br /><br />
                Racing Tip: Sometimes, speed isn't the answer. Slow down to observe the timing of traps. However, when facing a loop or a cliff jump, full throttle is required. Landing on your back wheel can give you a slight speed boost. With dozens of levels available, Moto X3M is the perfect adrenaline rush for boring study halls.
              </div>

              {/* Task 2: Internal Links Section */}
              <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">More Unblocked Games 2025</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
                  <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Snake Game Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Zero Lag Games Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Free Games Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play No Download Games Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Unblocked Games 2025 (Main)</a></li>
                  <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Best Unblocked Games 2025</a></li>
                  <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play ProMax Games Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Retro Bowl Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play 1v1.LOL Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Slope Game Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Moto X3M Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Run 3 Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Fireboy & Watergirl Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Paper.io Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters MAX Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Full Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers World Unblocked 2025</a></li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-80">
              <div className="bg-gray-800/50 rounded-xl p-4 text-center mb-6">
                <span className="text-gray-500 text-[10px] font-bold uppercase block mb-2">Promoted Content</span>
                <div className="h-48 bg-gray-900 rounded border border-dashed border-gray-700 flex items-center justify-center">
                   <span className="text-gray-700 text-xs font-bold uppercase tracking-widest">Ad Placeholder</span>
                </div>
              </div>

              <h3 className="font-bold text-white mb-4 uppercase text-xs">More Stunts</h3>
              <div className="space-y-4">
                {GAMES.filter(g => g.id !== id).map(related => (
                  <Link key={related.id} to={`/game/${related.id}`} className="flex gap-3 group">
                    <div className="w-20 aspect-video bg-gray-800 rounded overflow-hidden flex items-center justify-center">
                       <span className="text-[10px] font-bold text-gray-600 group-hover:text-orange-500">{related.thumbnailText}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-xs font-bold group-hover:text-orange-500 transition-colors uppercase">{related.title}</h4>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Click to race</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AdBanner />
    </div>
  );
};

/**
 * MAIN APP
 */
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GamePlayer />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
