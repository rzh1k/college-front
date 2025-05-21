
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/data/mockData";
import DashboardLayout from "@/components/DashboardLayout";
import ModuleList from "@/components/ModuleList";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === Number(courseId));
  
  if (!course) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <Button onClick={() => navigate("/courses")}>Back to Courses</Button>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Button 
          variant="ghost" 
          className="mb-4" 
          onClick={() => navigate("/courses")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Button>
        
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-university-primary">{course.title}</h1>
          <Button 
            onClick={() => navigate(`/register/${course.id}`)}
            className="bg-university-primary hover:bg-university-primary/90"
          >
            Register for this Course
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">About this Course</h2>
          <p className="text-slate-700">{course.description}</p>
        </div>
        
        <ModuleList modules={course.modules} courseId={course.id} />
      </div>
    </DashboardLayout>
  );
};

export default CourseDetail;
