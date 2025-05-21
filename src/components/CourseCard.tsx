
import { Course } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-university-primary">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-600 mb-2">Modules: {course.modules.length}</p>
        <ul className="text-sm list-disc list-inside text-slate-600">
          {course.modules.slice(0, 2).map((module) => (
            <li key={module.id} className="truncate">
              {module.code}: {module.title}
            </li>
          ))}
          {course.modules.length > 2 && (
            <li className="text-slate-500">And {course.modules.length - 2} more...</li>
          )}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => navigate(`/courses/${course.id}`)}
        >
          View Details
        </Button>
        <Button 
          onClick={() => navigate(`/register/${course.id}`)}
          className="bg-university-primary hover:bg-university-primary/90"
        >
          Register
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
