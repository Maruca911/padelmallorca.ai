import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import PageMeta from '../components/PageMeta';
import StructuredData, { articleSchema } from '../components/StructuredData';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl text-earth-800 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-forest-600 font-semibold hover:text-forest-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const schemaData = articleSchema({
    title: post.title,
    description: post.excerpt,
    date: post.date,
    url: `https://padelmallorca.ai/blog/${post.slug}`,
    imageUrl: post.imageUrl,
  });

  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={i} className="font-heading font-bold text-2xl text-earth-800 mt-10 mb-4">
            {block.replace('## ', '')}
          </h2>
        );
      }
      if (block.startsWith('### ')) {
        return (
          <h3 key={i} className="font-heading font-bold text-xl text-earth-800 mt-8 mb-3">
            {block.replace('### ', '')}
          </h3>
        );
      }

      const lines = block.split('\n');
      const isBoldList = lines.every((l) => l.startsWith('**') || l.trim() === '');
      if (isBoldList && lines.length > 1) {
        return (
          <div key={i} className="space-y-3 my-4">
            {lines
              .filter((l) => l.trim())
              .map((line, j) => {
                const match = line.match(/^\*\*(.+?)\*\*(.*)$/);
                if (match) {
                  return (
                    <p key={j} className="text-earth-600 leading-relaxed">
                      <strong className="text-earth-800">{match[1]}</strong>
                      {match[2]}
                    </p>
                  );
                }
                return (
                  <p key={j} className="text-earth-600 leading-relaxed">{line}</p>
                );
              })}
          </div>
        );
      }

      return (
        <p key={i} className="text-earth-600 leading-relaxed my-4">
          {block}
        </p>
      );
    });
  };

  return (
    <>
      <PageMeta
        title={`${post.title} | Padel Mallorca Blog`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.imageUrl}
      />
      <StructuredData data={schemaData} />
      <div className="relative">
        <div
          className="h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${post.imageUrl.replace('w=800&h=450', 'w=1920&h=1080')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 to-earth-900/80" />
      </div>

      <article className="container-max max-w-3xl px-4 sm:px-6 -mt-32 relative z-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-forest-600 font-semibold hover:text-forest-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <h1 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-earth-800 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-earth-500 mb-8 pb-8 border-b border-sand-200">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>

          <div className="prose-custom">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200 bg-forest-50 -mx-6 md:-mx-10 -mb-6 md:-mb-10 px-6 md:px-10 py-8 rounded-b-2xl">
            <h3 className="font-heading font-bold text-xl text-earth-800 mb-2">
              Ready to Play Padel in Mallorca?
            </h3>
            <p className="text-earth-500 text-sm mb-4">
              Get matched with the best courts, coaches, and camps. It's free and takes less than 2 minutes.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 bg-forest-500 text-white font-heading font-bold rounded-xl hover:bg-forest-600 transition-colors"
            >
              Get Matched Free
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
