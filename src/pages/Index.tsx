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

  const balloonElements = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="absolute text-4xl animate-balloon-float"
      style={{
        left: `${10 + i * 12}%`,
        top: `${10 + Math.random() * 20}%`,
        animationDelay: `${i * 0.5}s`
      }}
    >
      🎈
    </div>
  ));

  const mainVideo = {
    id: 'main',
    title: 'Главное поздравление',
    description: 'Особенное видео-поздравление для любимой подруги',
    thumbnail: '/img/aed60ce9-a654-4256-b142-7df3b59d48d3.jpg'
  };

  const blooperVideos = [
    {
      id: 'blooper1',
      title: 'Забавный момент #1',
      description: 'Когда слова перепутались'
    },
    {
      id: 'blooper2', 
      title: 'Неудачный дубль #2',
      description: 'Смешная реакция на подарок'
    },
    {
      id: 'blooper3',
      title: 'Блупер #3', 
      description: 'Когда все пошло не по плану'
    },
    {
      id: 'blooper4',
      title: 'Забавная попытка #4',
      description: 'Танцевальные неудачи'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50 relative overflow-hidden">
      {/* Анимированные элементы фона */}
      <div className="fixed inset-0 pointer-events-none">
        {confettiElements}
        {balloonElements}
      </div>

      {/* Праздничный заголовок */}
      <div className="relative z-10 text-center py-16 px-4">
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-300 to-purple-600 animate-fade-in-up mb-4">
          С Днём Рождения! 🎉
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
              <div className="relative aspect-video bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl overflow-hidden group cursor-pointer">
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
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{mainVideo.title}</h2>
                <p className="text-gray-600 text-lg">{mainVideo.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Раздел блуперсов */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 mb-4 animate-fade-in-up">
            Забавные Моменты 😄
          </h2>
          <p className="text-xl text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Неудачные дубли и смешные попытки записи поздравления
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {blooperVideos.map((video, index) => (
            <Card 
              key={video.id} 
              className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border-0 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              onClick={() => setActiveVideo(video.id)}
            >
              <CardContent className="p-6">
                <div className="relative aspect-video bg-gradient-to-br from-yellow-200 to-pink-200 rounded-lg mb-4 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-pink-300/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors duration-300">
                      <Icon name="Play" size={32} className="text-pink-500" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full font-bold text-xs">
                    БЛУПЕР #{index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Финальное праздничное сообщение */}
      <div className="text-center py-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-2xl mx-auto p-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
            Пусть этот день будет незабываемым! 💝
          </h3>
          <p className="text-lg text-gray-700">
            Желаю тебе море счастья, океан улыбок и вселенную любви! 
            Ты заслуживаешь самого лучшего в этом мире! 🌟
          </p>
        </div>
      </div>

      {/* Модальное окно для воспроизведения видео */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {activeVideo === 'main' ? mainVideo.title : blooperVideos.find(v => v.id === activeVideo)?.title}
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setActiveVideo(null)}
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
            
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
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