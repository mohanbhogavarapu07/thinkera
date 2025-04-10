
import React from "react";
import { Star, Clock, Award, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  rating: number;
  certification: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  level,
  duration,
  rating,
  certification,
  category,
}) => {
  return (
    <div className="bg-white dark:bg-skill-dark/90 rounded-xl shadow-md overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <Badge className="absolute top-3 right-3 bg-card-gradient">{category}</Badge>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-skill-purple border-skill-purple">{level}</Badge>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Award className="h-4 w-4 mr-1" />
            {certification}
          </div>
        </div>
        
        <a 
          href="#course-details" 
          className="w-full mt-2 bg-secondary dark:bg-secondary hover:bg-secondary/80 dark:hover:bg-secondary/80 flex items-center justify-center py-2 rounded-lg text-skill-purple dark:text-white font-medium transition-colors"
        >
          View Course
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
