const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Sound familiar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Taking a break is the right call. Coming back shouldn't feel like starting from scratch — but for most freelancers, it does.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-card rounded-xl border border-destructive/10 hover:border-destructive/40 shadow-soft transition-all duration-300 group">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-destructive/20 transition-colors drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">
              <svg className="w-8 h-8 text-destructive drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Out of Sight</h3>
            <p className="text-muted-foreground leading-relaxed">
              While you were away, your clients moved on. Not because they wanted to — they just forgot you were coming back.
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-xl border border-destructive/10 hover:border-destructive/40 shadow-soft transition-all duration-300 group">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-destructive/20 transition-colors drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">
              <svg className="w-8 h-8 text-destructive drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">The Cold Start</h3>
            <p className="text-muted-foreground leading-relaxed">
              Getting back to a full schedule from zero is exhausting. It can take months to rebuild what you had — time most people can't afford to lose.
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-xl border border-destructive/10 hover:border-destructive/40 shadow-soft transition-all duration-300 group">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-destructive/20 transition-colors drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">
              <svg className="w-8 h-8 text-destructive drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Too Much To Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              You're back — but now you're drowning in messages, chasing replies, and trying to post on Instagram while actually doing your job.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-xl border border-destructive/10 hover:border-destructive/40 shadow-soft transition-all duration-300 group">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-destructive/20 transition-colors drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]">
              <svg className="w-8 h-8 text-destructive drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">The Wobble</h3>
            <p className="text-muted-foreground leading-relaxed">
              After a break, imposter syndrome hits hard. You know you're good — but putting yourself back out there? That's the hard part.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;