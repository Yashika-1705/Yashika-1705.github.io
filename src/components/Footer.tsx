const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} · Built with intention</p>
          <p className="font-mono text-xs">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
