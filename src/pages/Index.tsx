import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blog</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        
        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigate('/blog')}>
            View Blog
          </Button>
          
          {user ? (
            <>
              <Button variant="outline" onClick={() => navigate('/admin')}>
                Admin Dashboard
              </Button>
              <Button variant="outline" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => navigate('/auth')}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
