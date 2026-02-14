import { useState, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  id?: string;
}

export default function FaqAccordion({ items, id = 'faq' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      contentRefs.current[index] = el;
    },
    [],
  );

  return (
    <div className="space-y-3" role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${id}-panel-${i}`;
        const buttonId = `${id}-button-${i}`;

        return (
          <div
            key={i}
            className="border border-sand-200 rounded-xl overflow-hidden bg-white"
            role="listitem"
          >
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-sand-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-inset"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="font-heading font-semibold text-earth-800 pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-earth-500 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[i]?.scrollHeight ?? 0}px`
                  : '0px',
              }}
            >
              <div
                ref={setRef(i)}
                className="px-6 pb-5 text-earth-600 leading-relaxed"
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
