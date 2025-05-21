
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/data/mockData";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Module, Staff } from "@/types";

const StaffCard = ({ staff }: { staff: Staff }) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">{staff.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm font-medium">{staff.title}</p>
      <p className="text-sm text-muted-foreground">{staff.email}</p>
    </CardContent>
  </Card>
);

const ModuleDetail = () => {
  const { courseId, moduleId } = useParams<{ courseId: string; moduleId: string }>();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === Number(courseId));
  const module = course?.modules.find(m => m.id === Number(moduleId));
  
  if (!course || !module) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Module not found</h2>
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
          onClick={() => navigate(`/courses/${courseId}`)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to {course.title}
        </Button>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-university-primary">{module.title}</h1>
            <div className="text-lg font-mono text-university-secondary">{module.code}</div>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-slate-700 mb-6">{module.description}</p>
          
          <h2 className="text-xl font-semibold mb-2">Module Contents</h2>
          <ul className="list-disc list-inside mb-6 text-slate-700 space-y-1">
            {module.contents.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-university-primary">Module Staff</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {module.staffMembers.map((staff) => (
              <StaffCard key={staff.id} staff={staff} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ModuleDetail;
