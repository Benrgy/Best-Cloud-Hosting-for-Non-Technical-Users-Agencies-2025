import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blog</h1>
        <p className="text-xl text-muted-foreground">Explore articles and manage your content</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/blog">View Blog</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/admin">Admin Panel</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
