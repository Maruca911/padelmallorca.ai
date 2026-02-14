import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CircleDot, ChevronDown } from 'lucide-react';
import { clubs } from '../data/clubsData';
import { lessonTypes } from '../data/lessonTypesData';
import { camps } from '../data/campsData';
import { events } from '../data/eventsData';

interface SubItem {
  to: string;
  label: string;
}

interface NavLink {
  to: string;
  label: string;
  subItems?: SubItem[];
}

const navLinks: NavLink[] = [
  { to: '/', label: 'Home' },
  {
    to: '/courts-clubs',
    label: 'Courts & Clubs',
    subItems: clubs.map((c) => ({ to: `/courts-clubs/${c.slug}`, label: c.name })),
  },
  {
    to: '/lessons-coaching',
    label: 'Lessons',
    subItems: lessonTypes.map((l) => ({ to: `/lessons-coaching/${l.slug}`, label: l.title })),
  },
  {
    to: '/camps-holidays',
    label: 'Camps',
    subItems: camps.map((c) => ({ to: `/camps-holidays/${c.slug}`, label: c.name })),
  },
  {
    to: '/tournaments-events',
    label: 'Tournaments',
    subItems: events.map((e) => ({ to: `/tournaments-events/${e.slug}`, label: e.name })),
  },
  { to: '/faq', label: 'FAQ' },
  { to: '/blog', label: 'Blog' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSection(null);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      const firstLink = menuRef.current?.querySelector('a') as HTMLElement | null;
      firstLink?.focus();
    }
  }, [menuOpen]);

  const handleMouseEnter = useCallback((label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!menuOpen || !menuRef.current) return;

      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [menuOpen],
  );

  const isActive = (link: NavLink) => {
    if (location.pathname === link.to) return true;
    if (link.subItems?.some((sub) => location.pathname === sub.to)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <CircleDot
            className={`w-8 h-8 transition-colors ${
              scrolled ? 'text-forest-500' : 'text-white'
            } group-hover:text-mint-300`}
            aria-hidden="true"
          />
          <span
            className={`font-heading font-bold text-lg md:text-xl transition-colors ${
              scrolled ? 'text-earth-800' : 'text-white'
            }`}
          >
            Padel Mallorca
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="relative"
              onMouseEnter={link.subItems ? () => handleMouseEnter(link.label) : undefined}
              onMouseLeave={link.subItems ? handleMouseLeave : undefined}
            >
              <Link
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                  isActive(link)
                    ? scrolled
                      ? 'text-forest-600 bg-forest-50'
                      : 'text-white bg-white/20'
                    : scrolled
                    ? 'text-earth-700 hover:text-forest-600 hover:bg-forest-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.label}
                {link.subItems && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {link.subItems && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-sand-100 py-2 z-50 animate-fade-in">
                  <Link
                    to={link.to}
                    className="block px-4 py-2 text-sm font-semibold text-earth-800 hover:bg-forest-50 hover:text-forest-600 transition-colors"
                  >
                    View All {link.label}
                  </Link>
                  <div className="border-t border-sand-100 my-1" />
                  {link.subItems.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === sub.to
                          ? 'text-forest-600 bg-forest-50 font-medium'
                          : 'text-earth-600 hover:bg-forest-50 hover:text-forest-600'
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/signup"
            className="ml-3 px-5 py-2.5 bg-forest-500 text-white font-semibold text-sm rounded-lg hover:bg-forest-600 transition-colors shadow-sm"
          >
            Get Matched Free
          </Link>
        </nav>

        <button
          ref={toggleRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-earth-800 hover:bg-earth-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="lg:hidden bg-white border-t border-sand-200 shadow-xl animate-slide-down max-h-[80vh] overflow-y-auto"
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="container-max px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.to}>
                <div className="flex items-center">
                  <Link
                    to={link.to}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(link)
                        ? 'text-forest-600 bg-forest-50'
                        : 'text-earth-700 hover:text-forest-600 hover:bg-forest-50'
                    }`}
                    aria-current={location.pathname === link.to ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                  {link.subItems && (
                    <button
                      onClick={() => setOpenMobileSection(openMobileSection === link.label ? null : link.label)}
                      className="p-3 text-earth-500 hover:text-forest-600 transition-colors"
                      aria-label={`Expand ${link.label} submenu`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMobileSection === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {link.subItems && openMobileSection === link.label && (
                  <div className="pl-6 pb-2 space-y-0.5">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                          location.pathname === sub.to
                            ? 'text-forest-600 bg-forest-50 font-medium'
                            : 'text-earth-600 hover:text-forest-600 hover:bg-forest-50'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/signup"
              className="mt-2 px-5 py-3 bg-forest-500 text-white font-semibold text-center rounded-lg hover:bg-forest-600 transition-colors"
            >
              Get Matched Free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
