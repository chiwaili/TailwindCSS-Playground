import React from 'react';
import { Heart } from 'lucide-react';
import { CardState, HoveredElement } from '../types';
import { twMerge } from 'tailwind-merge';

interface CardPreviewProps {
  state: CardState;
  hoveredElement: HoveredElement;
  setHoveredElement: (element: HoveredElement) => void;
}

export function CardPreview({ state, hoveredElement, setHoveredElement }: CardPreviewProps) {
  const getHighlightClass = (element: HoveredElement) => {
    return hoveredElement === element
      ? 'ring-2 ring-rose-300 ring-offset-2 transition-all duration-300'
      : 'transition-all duration-300';
  };

  const containerClass = twMerge(
    'w-full max-w-md overflow-hidden relative cursor-default',
    state.cardBg,
    'border',
    state.cardBorder === 'border-transparent' ? 'border-transparent' : state.cardBorder,
    state.cardRadius,
    state.cardShadow,
    state.cardMargin,
    getHighlightClass('container')
  );

  return (
    <div className="flex-1 w-full h-full flex items-center justify-center bg-transparent overflow-auto p-4 md:p-12 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-rose-200/30 rounded-full blur-[80px]"></div>
      </div>
      
      {state.cardType === 'stats' && (
      <article
        onMouseEnter={() => setHoveredElement('container')}
        onMouseLeave={() => setHoveredElement(null)}
        className={containerClass}
      >
        <header
          onMouseEnter={() => setHoveredElement('header')}
          onMouseLeave={() => setHoveredElement(null)}
          className={twMerge(
            'relative w-full',
            state.headerBg,
            state.headerHeight,
            getHighlightClass('header')
          )}
        >
          <div className="absolute inset-0 bg-white/10"></div>
          <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
             <Heart className="w-3 h-3 text-white" />
          </button>
        </header>

        <section
          onMouseEnter={() => setHoveredElement('padding')}
          onMouseLeave={() => setHoveredElement(null)}
          className={twMerge(state.cardPadding, 'flex flex-col', state.spacing, getHighlightClass('padding'))}
        >
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Last modified: Dec 3, 2025</p>

          <h2
            onMouseEnter={() => setHoveredElement('title')}
            onMouseLeave={() => setHoveredElement(null)}
            className={twMerge(
              state.titleSize,
              state.titleWeight,
              state.titleColor,
              state.titleTracking,
              state.titleLeading,
              getHighlightClass('title')
            )}
          >
            Super tailwindCSS playground from shapes.io
          </h2>

          <dl
            onMouseEnter={() => setHoveredElement('meta')}
            onMouseLeave={() => setHoveredElement(null)}
            className={twMerge(
              'flex flex-col pt-4 border-t border-slate-100',
              state.metaSize,
              state.spacing,
              getHighlightClass('meta')
            )}
          >
            <div className="flex justify-between items-center">
              <dt className={twMerge('font-semibold', state.metaLabelColor)}>File ID:</dt>
              <dd className={twMerge(state.metaValueColor)}>AX1234</dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className={twMerge('font-semibold', state.metaLabelColor)}>Refresh rate:</dt>
              <dd className={twMerge(state.metaValueColor)}>2 weeks</dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className={twMerge('font-semibold', state.metaLabelColor)}>Last refresh:</dt>
              <dd className={twMerge('italic', state.metaValueColor)}>3 days ago</dd>
            </div>
          </dl>
        </section>
      </article>
      )}

      {state.cardType === 'product' && (
      <article
        onMouseEnter={() => setHoveredElement('container')}
        onMouseLeave={() => setHoveredElement(null)}
        className={containerClass}
      >
        <header
          onMouseEnter={() => setHoveredElement('header')}
          onMouseLeave={() => setHoveredElement(null)}
          className={twMerge(
            'relative w-full',
            state.headerBg,
            state.headerHeight,
            getHighlightClass('header')
          )}
        >
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute bottom-4 left-4">
             <span 
              onMouseEnter={() => setHoveredElement('badge')}
              onMouseLeave={() => setHoveredElement('header')}
              className={twMerge('px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md backdrop-blur-sm', state.badgeBg, state.badgeColor, getHighlightClass('badge'))}
             >
               New Arrival
             </span>
          </div>
        </header>

        <section
          onMouseEnter={() => setHoveredElement('padding')}
          onMouseLeave={() => setHoveredElement(null)}
          className={twMerge(state.cardPadding, 'flex flex-col', state.spacing, state.alignText, getHighlightClass('padding'))}
        >
          <div className="flex justify-between items-start gap-4">
             <h2
               onMouseEnter={() => setHoveredElement('title')}
               onMouseLeave={() => setHoveredElement('padding')}
               className={twMerge(
                 state.titleSize,
                 state.titleWeight,
                 state.titleColor,
                 state.titleTracking,
                 state.titleLeading,
                 getHighlightClass('title')
               )}
             >
               Premium Wireless Headphones
             </h2>
             <span
               onMouseEnter={() => setHoveredElement('price')}
               onMouseLeave={() => setHoveredElement('padding')}
               className={twMerge(state.priceWeight, state.priceSize, state.priceColor, getHighlightClass('price'))}
             >
               $299
             </span>
          </div>
          
          <p className="text-sm text-slate-500 leading-relaxed">
            Experience pristine audio quality with active noise cancellation and 40-hour battery life.
          </p>
          
          <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
             <div className="flex gap-0.5 text-amber-400">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               <svg className="w-4 h-4 fill-current text-slate-200" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
             </div>
             <button
               onMouseEnter={() => setHoveredElement('button')}
               onMouseLeave={() => setHoveredElement('padding')}
               className={twMerge('px-4 py-2 font-medium text-sm transition-colors text-white', state.buttonBg, state.buttonRadius, getHighlightClass('button'))}
             >
               Add to Cart
             </button>
          </div>
        </section>
      </article>
      )}

      {state.cardType === 'blog' && (
      <article
        onMouseEnter={() => setHoveredElement('container')}
        onMouseLeave={() => setHoveredElement(null)}
        className={containerClass}
      >
        <header
          onMouseEnter={() => setHoveredElement('header')}
          onMouseLeave={() => setHoveredElement(null)}
          className={twMerge(
            'relative w-full',
            state.headerBg,
            state.headerHeight,
            getHighlightClass('header')
          )}
        >
          <div className="absolute inset-0 bg-white/10"></div>
        </header>

        <section
          onMouseEnter={() => setHoveredElement('padding')}
          onMouseLeave={() => setHoveredElement(null)}
          className={twMerge(state.cardPadding, 'flex flex-col', state.spacing, state.alignText, getHighlightClass('padding'))}
        >
          <p 
            onMouseEnter={() => setHoveredElement('category')}
            onMouseLeave={() => setHoveredElement('padding')}
            className={twMerge('text-[11px] uppercase tracking-wider', state.categoryWeight, state.categoryColor, getHighlightClass('category'))}
          >
            Design Patterns
          </p>

          <h2
            onMouseEnter={() => setHoveredElement('title')}
            onMouseLeave={() => setHoveredElement('padding')}
            className={twMerge(
              state.titleSize,
              state.titleWeight,
              state.titleColor,
              state.titleTracking,
              state.titleLeading,
              getHighlightClass('title')
            )}
          >
            The Future of Component Driven Architecture
          </h2>
          
          <p 
            onMouseEnter={() => setHoveredElement('excerpt')}
            onMouseLeave={() => setHoveredElement('padding')}
            className={twMerge('mt-2', state.excerptSize, state.excerptColor, getHighlightClass('excerpt'))}
          >
            A deep dive into how modular UI components are shaping the way we build and maintain complex systems over time.
          </p>

          <div
            onMouseEnter={() => setHoveredElement('meta')}
            onMouseLeave={() => setHoveredElement('padding')}
            className={twMerge(
              'flex justify-between items-center pt-4 mt-2 border-t border-slate-100',
              state.metaSize,
              getHighlightClass('meta')
            )}
          >
            <span className={twMerge('font-medium', state.metaLabelColor)}>Jane Doe</span>
            <span className={twMerge(state.metaValueColor)}>Apr 24, 2026</span>
          </div>
        </section>
      </article>
      )}

      {state.cardType === 'profile' && (
      <article
        onMouseEnter={() => setHoveredElement('container')}
        onMouseLeave={() => setHoveredElement(null)}
        className={containerClass}
      >
        <header
          onMouseEnter={() => setHoveredElement('header')}
          onMouseLeave={() => setHoveredElement(null)}
          className={twMerge(
            'relative w-full',
            state.headerBg,
            state.headerHeight,
            getHighlightClass('header')
          )}
        >
        </header>

        <section
          onMouseEnter={() => setHoveredElement('padding')}
          onMouseLeave={() => setHoveredElement(null)}
          className={twMerge(state.cardPadding, 'flex flex-col', state.alignText, getHighlightClass('padding'))}
        >
          <div className={twMerge("flex w-full mb-4", state.alignText === 'text-center' ? 'justify-center' : state.alignText === 'text-right' ? 'justify-end' : 'justify-start', "mt-[-50px]")}>
            <div 
              onMouseEnter={() => setHoveredElement('avatar')}
              onMouseLeave={() => setHoveredElement('padding')}
              className={twMerge("relative p-1 bg-white inline-flex shadow-sm transform -translate-y-6", state.avatarSize, state.avatarRadius, getHighlightClass('avatar'))}
            >
              <div className={twMerge("w-full h-full bg-slate-200 overflow-hidden", state.avatarRadius)}>
                 {/* Fake Avatar */}
                 <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
            </div>
          </div>

          <div className={twMerge("flex flex-col -mt-8", state.spacing)}>
            <div>
              <h2
                onMouseEnter={() => setHoveredElement('title')}
                onMouseLeave={() => setHoveredElement('padding')}
                className={twMerge(
                  state.titleSize,
                  state.titleWeight,
                  state.titleColor,
                  state.titleTracking,
                  state.titleLeading,
                  getHighlightClass('title')
                )}
              >
                Peter Parker
              </h2>
              <p 
                onMouseEnter={() => setHoveredElement('role')}
                onMouseLeave={() => setHoveredElement('padding')}
                className={twMerge('mt-1 font-medium', state.roleSize, state.roleColor, getHighlightClass('role'))}
              >
                Senior Digital Product Designer
              </p>
            </div>
            
            <p 
              onMouseEnter={() => setHoveredElement('bio')}
              onMouseLeave={() => setHoveredElement('padding')}
              className={twMerge('pt-4 mt-2 border-t border-slate-100', state.bioSize, state.bioColor, getHighlightClass('bio'))}
            >
              Passionate about crafting intuitive interfaces and mapping complex user journeys. Exploring the intersection of design systems and accessible technology.
            </p>
          </div>
        </section>
      </article>
      )}
    </div>
  );
}
