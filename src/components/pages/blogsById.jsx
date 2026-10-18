import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BLOGS } from "../../data/data";
import Footer from "@/components/footer";

function BlogsById() {
  const { id } = useParams();
  const blog = BLOGS.find((b) => b.id === id);

  // Get related blogs (same category, excluding current)
  const relatedBlogs = blog
    ? BLOGS.filter(
        (b) => b.category === blog.category && b.id !== blog.id
      ).slice(0, 3)
    : [];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container pt-8">
          <Button variant="ghost" asChild className="group">
            <Link to="/blogs" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <article className="container py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="animate-fade-up mb-6">
              <Badge variant="secondary" className="text-sm">
                {blog.category}
              </Badge>
            </div>

            {/* Title */}
            <h1
              className="animate-fade-up font-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-6"
              style={{ animationDelay: "100ms" }}
            >
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div
              className="animate-fade-up flex flex-wrap items-center gap-4 text-muted-foreground mb-8 pb-8 border-b"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium text-foreground">
                  {blog.author}
                </span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="animate-fade-up flex items-center gap-3 mb-10"
              style={{ animationDelay: "300ms" }}
            >
              <Button variant="outline" size="sm" className="gap-2">
                <BookmarkPlus className="h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            <div
              className="animate-fade-up relative aspect-[16/9] rounded-2xl overflow-hidden mb-12"
              style={{ animationDelay: "400ms" }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="animate-fade-up prose prose-lg dark:prose-invert max-w-none"
              style={{ animationDelay: "500ms" }}
            >
              {/* Excerpt as intro paragraph */}
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {blog.excerpt}
              </p>

              {/* Mock article content */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">
                Getting Started
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <ul className="my-6 space-y-2">
                <li>Research your destination thoroughly before booking</li>
                <li>Check visa requirements and travel advisories</li>
                <li>Book accommodations in advance during peak season</li>
                <li>Learn basic phrases in the local language</li>
                <li>Get comprehensive travel insurance</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">
                What to Expect
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-lg">
                "Travel is the only thing you buy that makes you richer. Every
                journey teaches you something new about the world and yourself."
              </blockquote>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">
                Pro Tips
              </h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>

              <ol className="my-6 space-y-2">
                <li>Pack light - you'll thank yourself later</li>
                <li>Always carry a portable charger</li>
                <li>Download offline maps before you go</li>
                <li>Try to blend in with locals</li>
                <li>Keep digital and physical copies of important documents</li>
              </ol>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">
                Final Thoughts
              </h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>

            {/* Author Box */}
            <div className="mt-12 p-6 rounded-2xl bg-muted/50 border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold mb-1">
                    {blog.author}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Travel writer and photographer with a passion for discovering
                    hidden gems around the world. Follow along for authentic
                    stories and practical travel advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="bg-muted/30 border-t">
            <div className="container py-16">
              <h2 className="font-heading text-3xl mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blogs/${relatedBlog.id}`}
                    className="group block bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <Badge variant="secondary" className="mb-3">
                        {relatedBlog.category}
                      </Badge>
                      <h3 className="font-heading text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {relatedBlog.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-t">
          <div className="container py-16 md:py-20 text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our handpicked destinations and start planning your dream
              trip today.
            </p>
            <Button size="lg" asChild>
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogsById;
