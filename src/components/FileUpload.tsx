import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  className?: string;
  disabled?: boolean;
}

export default function FileUpload({ 
  onFileSelect, 
  accept = "video/*", 
  className = "",
  disabled = false 
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Card 
      className={`${className} ${
        isDragOver ? 'border-2 border-blue-400 bg-blue-50' : 'border-2 border-dashed border-gray-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-blue-400 hover:bg-blue-50'} transition-all duration-200`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <CardContent className="p-6 text-center">
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInput}
          className="hidden"
          disabled={disabled}
        />
        
        <div className="flex flex-col items-center gap-4">
          <div className={`rounded-full p-4 ${isDragOver ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <Icon name="Upload" size={32} className={isDragOver ? 'text-blue-500' : 'text-gray-500'} />
          </div>
          
          <div>
            <p className="text-lg font-medium text-gray-700 mb-2">
              Загрузить видео
            </p>
            <p className="text-sm text-gray-500">
              Перетащите файл сюда или нажмите для выбора
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Поддерживаются форматы: MP4, MOV, AVI
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}