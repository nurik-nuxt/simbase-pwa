import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputFile = join(__dirname, '../public/icons/logo.png');
const outputDir = join(__dirname, '../public/icons');

// Создаем директорию, если она не существует
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
  try {
    // Загружаем исходное изображение
    const image = sharp(inputFile);
    
    // Получаем метаданные изображения
    const metadata = await image.metadata();
    console.log(`Processing source image: ${metadata.width}x${metadata.height}px`);

    // Генерируем иконки всех размеров
    for (const size of sizes) {
      const outputFile = join(outputDir, `icon-${size}x${size}.png`);
      
      await image
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputFile);
      
      console.log(`Generated: icon-${size}x${size}.png`);
    }

    // Создаем маскируемую иконку для Android
    const maskableSize = 192;
    const maskableOutputFile = join(outputDir, `icon-${maskableSize}x${maskableSize}-maskable.png`);
    
    await image
      .resize(maskableSize, maskableSize, {
        fit: 'contain',
        background: { r: 8, g: 136, b: 204, alpha: 1 } // #0088cc
      })
      .png()
      .toFile(maskableOutputFile);
    
    console.log(`Generated maskable icon: icon-${maskableSize}x${maskableSize}-maskable.png`);
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons(); 