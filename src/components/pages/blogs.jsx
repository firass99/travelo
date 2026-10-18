import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, User, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BLOGS } from "../../data/data";
import Footer from "@/components/footer";

const CATEGORIES = [
  "All",
  "Travel Tips",
  "Solo Travel",
  "Budget Travel",
  "Sustainable Travel",
  "Photography",
  "Food & Culture",
  "Digital Nomad",
  "Adventure",
];

function HeroFeaturedPost({ blog }) {
  return (
    <Link to={`/blogs/${blog.id}`} className="group block">
      <div className="relative h-[500px] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-accent text-accent-foreground border-0">
                <Sparkles className="h-3 w-3 mr-1" />
                Featured Story
              </Badge>
              <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-0">
                {blog.category}
              </Badge>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4 group-hover:text-accent transition-colors">
              {blog.title}
            </h2>

            <p className="text-white/90 text-lg mb-6 line-clamp-2">
              {blog.excerpt}
            </p>

            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function TrendingPostCard({ blog, index }) {
  return (
    <Link to={`/blogs/${blog.id}`} className="group flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
        <span className="font-bold text-white text-lg">{index + 1}</span>
      </div>

      <div className="flex-1 min-w-0">
        <Badge variant="secondary" className="mb-2 text-xs">
          {blog.category}
        </Badge>
        <h3 className="font-heading text-base leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{blog.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

function StandardBlogCard({ blog }) {
  return (
    <Link to={`/blogs/${blog.id}`} className="group block">
      <article className="h-full flex flex-col bg-card rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{blog.category}</Badge>
            {blog.featured && (
              <Badge className="bg-accent/10 text-accent border-accent/20">
                Featured
              </Badge>
            )}
          </div>

          <h3 className="font-heading text-xl leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {blog.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <User className="h-3.5 w-3.5" />
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    let filtered = [...BLOGS];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchQuery, selectedCategory]);

  const featuredPost = filteredBlogs.find((blog) => blog.featured);
  const trendingPosts = filteredBlogs.slice(0, 5);
  const regularPosts = filteredBlogs.filter((blog) => blog.id !== featuredPost?.id);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header with Search */}
        <div className="border-b bg-gradient-to-b from-muted/30 to-background">
          <div className="container py-12">
            <div className="max-w-3xl">
              <h1 className="animate-fade-up font-heading text-4xl md:text-5xl text-foreground mb-3">
                Travel Stories & Guides
              </h1>
              <p className="animate-fade-up text-lg text-muted-foreground mb-8" style={{ animationDelay: "100ms" }}>
                Expert tips, inspiring stories, and practical advice for your next adventure
              </p>

              {/* Search Bar */}
              <div className="animate-fade-up relative" style={{ animationDelay: "200ms" }}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles, authors, topics..."
                  className="pl-12 pr-4 h-14 text-base border-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b">
          <div className="container py-4">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredBlogs.length > 0 ? (
          <>
            {/* Hero Featured Post */}
            {featuredPost && !searchQuery && selectedCategory === "All" && (
              <div className="container py-12">
                <div className="animate-fade-up">
                  <HeroFeaturedPost blog={featuredPost} />
                </div>
              </div>
            )}

            {/* Main Content Grid */}
            <div className="container py-12">
              <div className="grid lg:grid-cols-[1fr_320px] gap-12">
                {/* Left: Blog Grid */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-heading text-2xl">
                      {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {regularPosts.map((blog) => (
                      <StandardBlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </div>

                {/* Right: Sidebar */}
                <aside className="space-y-8">
                  {/* Trending Posts */}
                  {!searchQuery && selectedCategory === "All" && (
                    <div className="animate-fade-up sticky top-32" style={{ animationDelay: "300ms" }}>
                      <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border p-6">
                        <div className="flex items-center gap-2 mb-6">
                          <TrendingUp className="h-5 w-5 text-accent" />
                          <h3 className="font-heading text-xl">Trending Now</h3>
                        </div>
                        <div className="space-y-6">
                          {trendingPosts.map((blog, index) => (
                            <TrendingPostCard key={blog.id} blog={blog} index={index} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Newsletter CTA */}
                  <div className="animate-fade-up bg-card border rounded-2xl p-6" style={{ animationDelay: "400ms" }}>
                    <h3 className="font-heading text-xl mb-3">Never Miss a Story</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get weekly travel inspiration and tips delivered to your inbox
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email"
                        className="w-full"
                      />
                      <Button className="w-full">
                        Subscribe
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      No spam, unsubscribe anytime
                    </p>
                  </div>

                  {/* Popular Categories */}
                  <div className="animate-fade-up bg-card border rounded-2xl p-6" style={{ animationDelay: "500ms" }}>
                    <h3 className="font-heading text-xl mb-4">Popular Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.filter(c => c !== "All").map((category) => {
                        const count = BLOGS.filter(b => b.category === category).length;
                        return (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted hover:bg-muted/80 transition-colors"
                          >
                            {category} ({count})
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </>
        ) : (
          <div className="container py-20">
            <div className="text-center max-w-md mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try a different search term or browse all categories
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                variant="outline"
              >
                Clear filters
              </Button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {filteredBlogs.length > 0 && (
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-t">
            <div className="container py-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                Ready to Turn Inspiration Into Reality?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Browse our destinations and start planning your next adventure
              </p>
              <Button size="lg" asChild>
                <Link to="/destinations" className="gap-2">
                  Explore Destinations
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default BlogsPage;
