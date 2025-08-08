const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">The Low Code Cookbook</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Making technology decisions simple for founders who want to build more with less.
          </p>
          
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <span>© 2024 Low Code Cookbook</span>
            <span>•</span>
            <span>Coming Soon</span>
            <span>•</span>
            <span>Beta Access Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;