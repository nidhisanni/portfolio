export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="font-medium">Nidhi Sanni</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Nidhi Sanni. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Built with React, Tailwind CSS & Python
          </p>
        </div>
      </div>
    </footer>
  );
}