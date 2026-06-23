import React, { useEffect } from 'react';
import { CardState } from '../types';
import { toast } from 'sonner';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css';

interface CodePanelProps {
  state: CardState;
  lastChanged: string | null;
}

export function CodePanel({ state, lastChanged }: CodePanelProps) {
  const getHtml = () => {
    const containerClasses = `${state.cardBg} border ${state.cardBorder === 'border-transparent' ? 'border-transparent' : state.cardBorder} ${state.cardRadius} ${state.cardShadow} ${state.cardMargin}`;

    if (state.cardType === 'product') {
      return `<article class="w-full max-w-md overflow-hidden relative ${containerClasses}">
  <header class="relative w-full ${state.headerBg} ${state.headerHeight}">
    <div class="absolute inset-0 bg-black/5"></div>
    <div class="absolute bottom-4 left-4">
      <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md backdrop-blur-sm ${state.badgeBg} ${state.badgeColor}">
        New Arrival
      </span>
    </div>
  </header>
  <section class="flex flex-col ${state.cardPadding} ${state.spacing} ${state.alignText}">
    <div class="flex justify-between items-start gap-4">
      <h2 class="${state.titleSize} ${state.titleWeight} ${state.titleColor} ${state.titleTracking} ${state.titleLeading}">
        Premium Wireless Headphones
      </h2>
      <span class="${state.priceWeight} ${state.priceSize} ${state.priceColor}">$299</span>
    </div>
    <p class="text-sm text-slate-500 leading-relaxed">
      Experience pristine audio quality with active noise cancellation and 40-hour battery life.
    </p>
    <div class="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
      <div class="flex gap-0.5 text-amber-400">
        <!-- 5 stars icons... -->
      </div>
      <button class="px-4 py-2 font-medium text-sm transition-colors text-white ${state.buttonBg} ${state.buttonRadius}">
        Add to Cart
      </button>
    </div>
  </section>
</article>`;
    }
    
    if (state.cardType === 'blog') {
      return `<article class="w-full max-w-md overflow-hidden relative ${containerClasses}">
  <header class="relative w-full ${state.headerBg} ${state.headerHeight}">
    <div class="absolute inset-0 bg-white/10"></div>
  </header>
  <section class="flex flex-col ${state.cardPadding} ${state.spacing} ${state.alignText}">
    <p class="text-[11px] uppercase tracking-wider ${state.categoryWeight} ${state.categoryColor}">
      Design Patterns
    </p>
    <h2 class="${state.titleSize} ${state.titleWeight} ${state.titleColor} ${state.titleTracking} ${state.titleLeading}">
      The Future of Component Driven Architecture
    </h2>
    <p class="mt-2 ${state.excerptSize} ${state.excerptColor}">
      A deep dive into how modular UI components are shaping the way we build and maintain complex systems over time.
    </p>
    <div class="flex justify-between items-center pt-4 mt-2 border-t border-slate-100 ${state.metaSize}">
      <span class="font-medium ${state.metaLabelColor}">Jane Doe</span>
      <span class="${state.metaValueColor}">Apr 24, 2026</span>
    </div>
  </section>
</article>`;
    }

    if (state.cardType === 'profile') {
      return `<article class="w-full max-w-md overflow-hidden relative ${containerClasses}">
  <header class="relative w-full ${state.headerBg} ${state.headerHeight}"></header>
  <section class="flex flex-col ${state.cardPadding} ${state.alignText}">
    <div class="flex w-full mb-4 mt-[-50px] ${state.alignText === 'text-center' ? 'justify-center' : state.alignText === 'text-right' ? 'justify-end' : 'justify-start'}">
      <div class="relative p-1 bg-white inline-flex shadow-sm transform -translate-y-6 ${state.avatarSize} ${state.avatarRadius}">
        <div class="w-full h-full bg-slate-200 overflow-hidden ${state.avatarRadius}">
          <!-- Avatar Img -->
        </div>
      </div>
    </div>
    <div class="flex flex-col -mt-8 ${state.spacing}">
      <div>
        <h2 class="${state.titleSize} ${state.titleWeight} ${state.titleColor} ${state.titleTracking} ${state.titleLeading}">
          Peter Pan
        </h2>
        <p class="mt-1 font-medium ${state.roleSize} ${state.roleColor}">
          Senior Digital Product Designer
        </p>
      </div>
      <p class="pt-4 mt-2 border-t border-slate-100 ${state.bioSize} ${state.bioColor}">
        Passionate about crafting intuitive interfaces and mapping complex user journeys. Exploring the intersection of design systems and accessible technology.
      </p>
    </div>
  </section>
</article>`;
    }

    return `<article class="w-full max-w-md overflow-hidden relative ${containerClasses}">
  <header class="relative w-full ${state.headerBg} ${state.headerHeight}">
    <div class="absolute inset-0 bg-white/10"></div>
    <button class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
      <div class="w-3 h-3 bg-white rounded-[1px]"></div>
    </button>
  </header>
  <section class="flex flex-col ${state.cardPadding} ${state.spacing}">
    <p class="text-xs text-slate-400 font-bold uppercase tracking-widest">Last modified: Dec 3, 2025</p>
    <h2 class="${state.titleSize} ${state.titleWeight} ${state.titleColor} ${state.titleTracking} ${state.titleLeading}">
      Super dataset report
    </h2>
    <dl class="flex flex-col pt-4 border-t border-slate-100 ${state.metaSize} ${state.spacing}">
      <div class="flex justify-between items-center">
        <dt class="font-semibold ${state.metaLabelColor}">File ID:</dt>
        <dd class="${state.metaValueColor}">AX1234</dd>
      </div>
      <div class="flex justify-between items-center">
        <dt class="font-semibold ${state.metaLabelColor}">Refresh rate:</dt>
        <dd class="${state.metaValueColor}">2 weeks</dd>
      </div>
      <div class="flex justify-between items-center">
        <dt class="font-semibold ${state.metaLabelColor}">Last refresh:</dt>
        <dd class="italic ${state.metaValueColor}">3 days ago</dd>
      </div>
    </dl>
  </section>
</article>`;
  };

  const html = getHtml();

  const highlightedHtml = React.useMemo(() => {
    let res = Prism.highlight(html, Prism.languages.markup, 'markup');

    if (lastChanged && lastChanged.trim() !== '') {
      const escape = (s: string) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const term = escape(lastChanged);
      
      const boundaryBefore = `(^|\\s|&quot;|"|'|>|<span class="token punctuation">"</span>|<span class="token punctuation">'</span>)`;
      const boundaryAfter = `($|\\s|&quot;|"|'|<|<span class="token punctuation">"</span>|<span class="token punctuation">'</span>)`;
      const regex = new RegExp(`${boundaryBefore}(${term})${boundaryAfter}`, 'g');
      
      res = res.replace(regex, `$1<mark class="code-highlight bg-transparent text-inherit">$2</mark>$3`);
    }

    return res;
  }, [html, lastChanged]);

  const handleCopy = () => {
    navigator.clipboard.writeText(html);
    toast.success('HTML copied to clipboard');
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-900 border-t border-slate-800 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          </div>
          <span className="text-[11px] text-slate-400 font-mono tracking-tight">card-preview.html</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-[11px] text-indigo-400 font-bold uppercase tracking-widest hover:text-indigo-300 transition-colors"
        >
          Copy HTML
        </button>
      </div>
      <div className="flex-1 overflow-auto bg-slate-950/40 custom-scrollbar">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes highlightFade {
            0% { background-color: rgba(99, 102, 241, 0.6); color: #fff; box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.6); border-radius: 2px; }
            30% { background-color: rgba(99, 102, 241, 0.6); color: #fff; box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.6); border-radius: 2px; }
            100% { background-color: transparent; color: inherit; box-shadow: none; border-radius: 2px; }
          }
          .code-highlight {
            animation: highlightFade 3s ease-out forwards;
            padding: 0 2px;
            margin: 0 -2px;
          }
        `}} />
        <pre className="text-xs font-mono leading-relaxed !bg-transparent !m-0 !p-6" style={{ background: 'transparent' }}>
          <code key={html} className="language-markup" dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
        </pre>
      </div>
    </div>
  );
}
