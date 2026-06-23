import React from 'react';
import { CardState, HoveredElement } from '../types';
import { 
  headerBgOptions, headerHeightOptions,
  titleSizeOptions, titleWeightOptions, titleColorOptions, titleTrackingOptions, titleLeadingOptions,
  metaSizeOptions, metaLabelColorOptions, metaValueColorOptions, metaSpacingOptions,
  paddingOptions, marginOptions,
  bgOptions, borderOptions, radiusOptions, shadowOptions
} from '../data/options';
import { RotateCcw, Shuffle, ChevronsUpDown } from 'lucide-react';
import { toast } from 'sonner';

interface ControlsPanelProps {
  state: CardState;
  updateState: (key: keyof CardState | 'cardType', value: string, label: string) => void;
  setHoveredElement: (element: HoveredElement) => void;
  onReset: () => void;
  onRandomize: () => void;
  lastChange?: { label: string; value: string; prop: string } | null;
}

export function ControlsPanel({ state, updateState, setHoveredElement, onReset, onRandomize, lastChange }: ControlsPanelProps) {

  const ControlSelect = ({ 
    label, 
    value, 
    options, 
    stateKey, 
    hoverTarget,
    helpText
  }: { 
    label: string, 
    value: string, 
    options: {label: string, value: string}[], 
    stateKey: keyof CardState,
    hoverTarget: HoveredElement,
    helpText: string
  }) => (
    <div 
      className="flex flex-col gap-1.5 p-2 -mx-2 rounded hover:bg-white/50 transition-colors relative group"
      onMouseEnter={() => setHoveredElement(hoverTarget)}
      onMouseLeave={() => setHoveredElement(null)}
    >
      <div className="absolute -left-6 top-0 w-1 h-full bg-rose-400 rounded-r opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex justify-between">
        {label}
      </label>
      <div className="text-[11px] text-slate-500 italic mb-1">{helpText}</div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => updateState(stateKey, e.target.value, label)}
          className="w-full bg-white border border-slate-200 text-slate-900 rounded py-1.5 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 appearance-none shadow-sm cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label} ({opt.value})
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full flex-1 bg-transparent">
      <div className="p-6 border-b border-slate-100 flex-shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <h1 className="font-bold text-lg tracking-tight">Component Settings</h1>
        </div>
        <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider italic">Learn by Changing Classes</p>
      </div>

      <div className="px-6 py-4 flex-shrink-0 animate-in fade-in flex items-center gap-2 border-b border-indigo-100 bg-indigo-50/50">
         <div className="w-full relative">
            <span className="text-[10px] font-bold text-indigo-700 uppercase mb-1 block tracking-widest">Select Template</span>
            <select
              value={state.cardType}
              onChange={(e) => updateState('cardType', e.target.value, 'Card Type')}
              className="w-full bg-white border border-indigo-200 text-indigo-900 rounded-lg py-2 pl-3 pr-8 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none shadow-sm cursor-pointer"
            >
              <option value="stats">Stats Card</option>
              <option value="product">E-commerce Product</option>
              <option value="blog">Blog Post Summary</option>
              <option value="profile">User Profile</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-5 flex items-center px-2 text-indigo-500">
               <ChevronsUpDown className="h-4 w-4" />
            </div>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4 space-y-6 pb-12 custom-scrollbar">
        
        {state.cardType !== 'profile' && (
        <section className="space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">1. Hero / Header</label>
            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-mono">&lt;header&gt;</span>
          </div>
          <p className="text-[11px] text-slate-500 mb-2">Customize the hero area with height and background.</p>
          <ControlSelect 
            label="Background" value={state.headerBg} options={headerBgOptions} stateKey="headerBg" hoverTarget="header"
            helpText="Named palette tokens or gradients."
          />
          <ControlSelect 
            label="Height" value={state.headerHeight} options={headerHeightOptions} stateKey="headerHeight" hoverTarget="header"
            helpText="Height of the hero container."
          />
        </section>
        )}

        <section className="space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">2. Main Text</label>
            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-mono">&lt;h2&gt;</span>
          </div>
          <p className="text-[11px] text-slate-500 mb-2">Typography of the main heading or title.</p>
          <ControlSelect 
            label="Font Size" value={state.titleSize} options={titleSizeOptions} stateKey="titleSize" hoverTarget="title"
            helpText="Overall scale factor."
          />
          <ControlSelect 
            label="Font Weight" value={state.titleWeight} options={titleWeightOptions} stateKey="titleWeight" hoverTarget="title"
            helpText="Font thickness."
          />
          <ControlSelect 
            label="Text Color" value={state.titleColor} options={titleColorOptions} stateKey="titleColor" hoverTarget="title"
            helpText="Text color utilities."
          />
        </section>

        {state.cardType === 'stats' && (
        <section className="space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">3. Meta details</label>
            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-mono">&lt;dl&gt;</span>
          </div>
          <p className="text-[11px] text-slate-500 mb-2">Styling for supporting lists.</p>
          <ControlSelect 
            label="Font Size" value={state.metaSize} options={metaSizeOptions} stateKey="metaSize" hoverTarget="meta"
            helpText="Base text scale for meta items."
          />
          <ControlSelect 
            label="Label Color" value={state.metaLabelColor} options={metaLabelColorOptions} stateKey="metaLabelColor" hoverTarget="meta"
            helpText="Color for terms (dt)."
          />
          <ControlSelect 
            label="Value Color" value={state.metaValueColor} options={metaValueColorOptions} stateKey="metaValueColor" hoverTarget="meta"
            helpText="Color for values (dd)."
          />
        </section>
        )}

        {state.cardType === 'product' && (
        <section className="space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">3. Pricing & Actions</label>
          </div>
          <ControlSelect label="Price Color" value={state.priceColor} options={titleColorOptions} stateKey="priceColor" hoverTarget="price" helpText="Highlight the price." />
          <ControlSelect label="Price Text Size" value={state.priceSize} options={titleSizeOptions} stateKey="priceSize" hoverTarget="price" helpText="Make it stand out." />
          <ControlSelect label="Badge Styles" value={state.badgeBg} options={bgOptions} stateKey="badgeBg" hoverTarget="badge" helpText="Product label tag." />
        </section>
        )}

        {state.cardType === 'profile' && (
        <section className="space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">1. Profile Presentation</label>
          </div>
          <ControlSelect label="Background Banner" value={state.headerBg} options={headerBgOptions} stateKey="headerBg" hoverTarget="header" helpText="Banner gradient/color." />
          <ControlSelect label="Avatar Size" value={state.avatarSize} options={[{label: 'Small', value: 'w-16 h-16'}, {label: 'Medium', value: 'w-24 h-24'}, {label: 'Large', value: 'w-32 h-32'}]} stateKey="avatarSize" hoverTarget="avatar" helpText="Profile picture size." />
          <ControlSelect label="Content Alignment" value={state.alignText} options={[{label: 'Left Aligned', value: 'text-left'}, {label: 'Center Aligned', value: 'text-center'}, {label: 'Right Aligned', value: 'text-right'}]} stateKey="alignText" hoverTarget="container" helpText="Overall alignment." />
        </section>
        )}

        <section className="space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">4. Spacing</label>
            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-mono">&lt;article&gt;</span>
          </div>
          <p className="text-[11px] text-slate-500 mb-2">Tailwind uses a spacing scale for layout and rhythm.</p>
          <ControlSelect 
            label="Internal Padding" value={state.cardPadding} options={paddingOptions} stateKey="cardPadding" hoverTarget="padding"
            helpText="Padding affects inside space (p-*)."
          />
          <ControlSelect 
            label="Vertical Flow" value={state.spacing} options={metaSpacingOptions} stateKey="spacing" hoverTarget="padding"
            helpText="Controls space between elements (space-y-*)."
          />
        </section>

        <section className="space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">5. Surface & Shape</label>
            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-mono">&lt;article&gt;</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">Surface utilities define the container properties.</p>
          <ControlSelect 
            label="Background Color" value={state.cardBg} options={bgOptions} stateKey="cardBg" hoverTarget="container"
            helpText="Background color of the container."
          />
          <ControlSelect 
            label="Border Color" value={state.cardBorder} options={borderOptions} stateKey="cardBorder" hoverTarget="container"
            helpText="Border color (must be used with 'border')."
          />
          <ControlSelect 
            label="Border Radius" value={state.cardRadius} options={radiusOptions} stateKey="cardRadius" hoverTarget="container"
            helpText="Radius changes the 'softness' of the component."
          />
        </section>

        <section className="space-y-3 relative group">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">6. Elevation</label>
            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-mono">&lt;article&gt;</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">Shadows create depth.</p>
          <ControlSelect 
            label="Box Shadow" value={state.cardShadow} options={shadowOptions} stateKey="cardShadow" hoverTarget="container"
            helpText="More shadow often increases perceived elevation."
          />
        </section>

        {lastChange && (
          <div className="pt-4">
            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
              <p className="text-[11px] font-bold text-emerald-700 uppercase mb-1">What Changed?</p>
              <p className="text-xs text-emerald-800 leading-tight font-medium mb-1">Updated {lastChange.prop}</p>
              <p className="text-[10px] text-emerald-600 font-mono">{lastChange.value}</p>
            </div>
          </div>
        )}

        <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-medium text-sm text-slate-900 mb-2">Glossary Quick Reference</h4>
          <ul className="text-xs text-slate-600 space-y-1.5 grid grid-cols-2 gap-x-2">
            <li><code className="bg-slate-200 px-1 rounded">text-*</code> &rarr; font-size</li>
            <li><code className="bg-slate-200 px-1 rounded">leading-*</code> &rarr; line-height</li>
            <li><code className="bg-slate-200 px-1 rounded">tracking-*</code> &rarr; letter-spacing</li>
            <li><code className="bg-slate-200 px-1 rounded">p-*</code> &rarr; padding</li>
            <li><code className="bg-slate-200 px-1 rounded">m-*</code> &rarr; margin</li>
            <li><code className="bg-slate-200 px-1 rounded">shadow-*</code> &rarr; box-shadow</li>
            <li><code className="bg-slate-200 px-1 rounded">rounded-*</code> &rarr; border-radius</li>
            <li><code className="bg-slate-200 px-1 rounded">space-y-*</code> &rarr; margin-top</li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 border-t border-slate-200 bg-slate-50/50">
        <div className="flex gap-2">
          <button 
            onClick={onReset}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white border border-slate-200 rounded-md text-xs font-semibold hover:bg-slate-50"
          >
            <span>Reset</span>
          </button>
          <button 
            onClick={onRandomize}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 text-white rounded-md text-xs font-semibold hover:bg-indigo-700 shadow-md shadow-indigo-200"
          >
            <span>Randomize</span>
          </button>
        </div>
      </div>
    </div>
  );
}
