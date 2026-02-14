import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <>
      <PageMeta
        title="Padel Mallorca Blog: Tips, Guides & News"
        description="Read padel tips, guides, and news for Mallorca players. From beginner rules and equipment advice to tournament calendars and holiday planning."
        canonicalPath="/blog"
      />
      <Hero
        title="Padel Mallorca Blog"
        subtitle="Tips, guides, and insights for padel players in Mallorca. From beginner rules to tournament calendars."
        imageUrl="https://images.pexels.com/photos/33678503/pexels-photo-33678503.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        compact
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-sand-100 hover:shadow-lg hover:border-forest-200 transition-all duration-300 h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-earth-500 mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-lg text-earth-800 mb-2 group-hover:text-forest-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-earth-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-forest-600 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
