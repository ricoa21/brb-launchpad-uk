const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            The Challenge Every Freelancer Faces
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Taking time away shouldn't mean losing momentum. Yet too many talented freelancers struggle to rebuild their presence after extended breaks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-xl shadow-soft card-hover">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Lost Visibility</h3>
            <p className="text-muted-foreground leading-relaxed">
              Clients and industry contacts forget about you during extended absences, making it harder to rebuild relationships and secure new work.
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-xl shadow-soft card-hover">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Momentum Loss</h3>
            <p className="text-muted-foreground leading-relaxed">
              Starting from zero feels overwhelming. Rebuilding your professional momentum takes months of dedicated effort.
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-xl shadow-soft card-hover">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Confidence Gap</h3>
            <p className="text-muted-foreground leading-relaxed">
              Self-doubt creeps in. You question your skills and worth, making it harder to market yourself effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;