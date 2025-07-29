import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const confettiElements = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-br from-pink-400 via-yellow-300 to-purple-400 animate-confetti"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    />
  ));



  const mainVideo = {
    id: 'main',
    title: 'Главное поздравление',
    description: 'Особенное видео-поздравление для любимой подруги',
    thumbnail: '/img/aed60ce9-a654-4256-b142-7df3b59d48d3.jpg'
  };

  const blooperVideo = {
    id: 'blooper1',
    title: 'Bloopers',
    description: 'они старались быть серьезными, но получалось не всегда'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50 relative overflow-hidden">
      {/* Анимированные элементы фона */}
      <div className="fixed inset-0 pointer-events-none">
        {confettiElements}
      </div>

      {/* Праздничный заголовок */}
      <div className="relative z-10 text-center py-16 px-4">
        <h1 className="text-6xl md:text-8xl font-black animate-fade-in-up mb-4">
          <span className="text-red-500">С</span>
          <span className="text-orange-400"> </span>
          <span className="text-yellow-400">Д</span>
          <span className="text-green-400">н</span>
          <span className="text-cyan-400">ё</span>
          <span className="text-blue-500">м</span>
          <span className="text-purple-500"> </span>
          <span className="text-red-500">Р</span>
          <span className="text-orange-400">о</span>
          <span className="text-yellow-400">ж</span>
          <span className="text-green-400">д</span>
          <span className="text-cyan-400">е</span>
          <span className="text-blue-500">н</span>
          <span className="text-purple-500">и</span>
          <span className="text-red-500">я</span>
          <span className="text-orange-400">!</span>
          <span className="text-yellow-400"> </span>
          <span className="text-green-400">🎉</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
          Специальный выпуск новостей для Ани - нашей прекрасной зайки!
        </p>
      </div>

      {/* Основное поздравительное видео */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 animate-fade-in-up animate-pulse-glow" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl overflow-hidden group cursor-pointer max-w-md mx-auto">
                <img 
                  src={mainVideo.thumbnail}
                  alt="Поздравительное видео"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-white/90 text-pink-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
                    onClick={() => setActiveVideo(mainVideo.id)}
                  >
                    <Icon name="Play" className="mr-2" size={24} />
                    Смотреть поздравление
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  ✨ ГЛАВНОЕ ВИДЕО
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Спецвыпуск программы новостей</h2>
                <p className="text-gray-600 text-lg">{mainVideo.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Раздел блуперсов */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 mb-4 animate-fade-in-up">Bloopers </h2>
          <p className="text-xl text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Неудачные дубли и смешные попытки записи поздравления
          </p>
        </div>

        <div className="flex justify-center">
          <Card 
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border-0 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer animate-fade-in-up max-w-md"
            style={{ animationDelay: '0.6s' }}
            onClick={() => setActiveVideo(blooperVideo.id)}
          >
            <CardContent className="p-6">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-yellow-200 to-pink-200 rounded-lg mb-4 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-pink-300/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors duration-300">
                    <Icon name="Play" size={32} className="text-pink-500" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full font-bold text-xs">
                  BLOOPERS
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{blooperVideo.title}</h3>
              <p className="text-gray-600">{blooperVideo.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Финальное праздничное сообщение */}
      <div className="text-center py-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-2xl mx-auto p-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">Официальное заявление! 💝</h3>
          <p className="text-lg text-gray-700">Анюта, ты — человек, для которого мы готовы устроить спецвыпуск новостей, составить три графика, опросить плюшевых зверей и снять кучу неудачных, но смешных дублей 🎬😂
Потому что ты того стоишь ✨ Ты — наше «вау», даже когда всё вокруг «ну такое» 🌥

Ты — наша радость 🥰 Наш стабильно хороший день ☀️
С тобой легче дышать, проще быть собой и всегда есть кому скинуть забавный мем в 3 ночи😹

Мы тебя очень любим❤️ 
Ты умеешь быть тёплой, смешной, настоящей, и мы каждый день благодарим судьбу за то, что ты с нами ✨

С днём рождения, солнышко 🎂
Ты — подарок, который мы получаем каждый день 🎁💛

Обнимаем, целуем и передаём всю свою любовь:
Аня, Наташа и Андрей 💛
</p>
        </div>
      </div>

      {/* Модальное окно для воспроизведения видео */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {activeVideo === 'main' ? mainVideo.title : blooperVideo.title}
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setActiveVideo(null)}
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
            
            <div className="aspect-[9/16] bg-gray-100 rounded-xl flex items-center justify-center max-w-md mx-auto">
              <div className="text-center">
                <Icon name="Video" size={64} className="text-gray-400 mb-4 mx-auto" />
                <p className="text-gray-600 text-lg mb-4">
                  Здесь будет воспроизводиться видео
                </p>
                <p className="text-gray-500 text-sm">
                  Добавьте ссылку на видео или загрузите файл
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;