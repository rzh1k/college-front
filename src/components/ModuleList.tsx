
import { Module } from "@/types";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ModuleListProps {
  modules: Module[];
  courseId: number;
}

const ModuleList = ({ modules, courseId }: ModuleListProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-university-primary">Course Modules</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {modules.map((module) => (
          <Card 
            key={module.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/courses/${courseId}/modules/${module.id}`)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex justify-between items-center">
                <span>{module.title}</span>
                <span className="text-sm font-normal text-slate-500">{module.code}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">{module.description}</p>
              <div className="mt-2 text-xs text-slate-500">
                Staff: {module.staffMembers.map(staff => staff.name).join(", ")}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ModuleList;
