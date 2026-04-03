import { ImageWithFallback } from './figma/ImageWithFallback';

interface CourseCardProps {
  title: string;
  category: string;
  level: string;
  imageUrl: string;
}

export function CourseCard({ title, category, level, imageUrl }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
            {category}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
            {level}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}